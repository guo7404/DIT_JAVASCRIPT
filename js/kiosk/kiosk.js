class Kiosk {
    constructor() {
        this.menuArea = document.getElementById('menuArea');
        this.cartArea = document.getElementById('cartArea');
        this.cartItems = document.getElementById('cartItems');
        this.totalAmountEl = document.getElementById('totalAmount');
        this.payButton = document.getElementById('payButton');
        this.receiptModal = document.getElementById('receiptModal');
        this.receiptContent = document.getElementById('receiptContent');
        this.closeModalBtn = document.querySelector('.close');
        
        this.adminAddMenuBtn = document.getElementById('addMenuBtn');
        this.adminViewSalesBtn = document.getElementById('viewSalesBtn');
        this.adminResetSalesBtn = document.getElementById('resetSalesBtn');

        this.menus = [
            { id: 1, name: '아메리카노', price: 3000, image: 'americano.jpg' },
            { id: 2, name: '카페라떼', price: 4000, image: 'latte.jpg' },
            { id: 3, name: '에스프레소', price: 2500, image: 'espresso.jpg' },
            { id: 4, name: '카푸치노', price: 4500, image: 'cappuccino.jpg' }
        ];

        this.cart = [];
        this.salesHistory = [];

        this.initEventListeners();
        this.renderMenus();
    }

    initEventListeners() {
        this.payButton.addEventListener('click', () => this.processPayment());
        this.closeModalBtn.addEventListener('click', () => this.closeReceiptModal());
        this.adminAddMenuBtn.addEventListener('click', () => this.addNewMenu());
        this.adminViewSalesBtn.addEventListener('click', () => this.displaySalesHistory());
        this.adminResetSalesBtn.addEventListener('click', () => this.resetSalesHistory());
    }

    renderMenus() {
        this.menuArea.innerHTML = '';
        this.menus.forEach(menu => {
            const menuEl = document.createElement('div');
            menuEl.classList.add('menu-item');
            menuEl.setAttribute('draggable', true);
            menuEl.dataset.id = menu.id;
            menuEl.innerHTML = `
                <img src="${menu.image}" alt="${menu.name}">
                <h3>${menu.name}</h3>
                <p>${menu.price}원</p>
            `;
            
            menuEl.addEventListener('dragstart', this.dragStart.bind(this));
            this.menuArea.appendChild(menuEl);
        });

        this.cartArea.addEventListener('dragover', this.dragOver);
        this.cartArea.addEventListener('drop', this.drop.bind(this));
        this.menuArea.addEventListener('dragover', this.dragOver);
        this.menuArea.addEventListener('drop', this.dropBack.bind(this));
    }

    dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.closest('.menu-item').dataset.id);
    }

    dragOver(e) {
        e.preventDefault();
    }

    drop(e) {
        e.preventDefault();
        const menuId = parseInt(e.dataTransfer.getData('text/plain'));
        const menu = this.menus.find(m => m.id === menuId);
        
        const existingCartItem = this.cart.find(item => item.menu.id === menuId);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            this.cart.push({ menu, quantity: 1 });
        }
        
        this.updateCart();
    }

    dropBack(e) {
        e.preventDefault();
        const menuId = parseInt(e.dataTransfer.getData('text/plain'));
        const cartItemIndex = this.cart.findIndex(item => item.menu.id === menuId);
        
        if (cartItemIndex !== -1) {
            if (this.cart[cartItemIndex].quantity > 1) {
                this.cart[cartItemIndex].quantity--;
            } else {
                this.cart.splice(cartItemIndex, 1);
            }
            this.updateCart();
        }
    }

    updateCart() {
        this.cartItems.innerHTML = '';
        let total = 0;

        this.cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.classList.add('cart-item');
            const subtotal = item.menu.price * item.quantity;
            total += subtotal;

            cartItemEl.innerHTML = `
                <span>${item.menu.name}</span>
                <div>
                    <span>${item.quantity}개</span>
                    <span>${subtotal}원</span>
                </div>
            `;
            this.cartItems.appendChild(cartItemEl);
        });

        this.totalAmountEl.textContent = total;
    }

    processPayment() {
        if (this.cart.length === 0) {
            alert('장바구니에 상품을 추가해주세요.');
            return;
        }

        const receiptDetails = this.generateReceipt();
        this.salesHistory.push({
            date: new Date(),
            items: [...this.cart],
            total: this.calculateTotal()
        });

        this.displayReceipt(receiptDetails);
        this.resetCart();
    }

    generateReceipt() {
        const date = new Date().toLocaleString();
        let receiptContent = `<h2>영수증</h2>
            <p>날짜: ${date}</p>
            <table>
                <tr>
                    <th>메뉴</th>
                    <th>수량</th>
                    <th>금액</th>
                </tr>`;

        this.cart.forEach(item => {
            receiptContent += `
                <tr>
                    <td>${item.menu.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.menu.price * item.quantity}원</td>
                </tr>`;
        });

        receiptContent += `
            <tr>
                <td colspan="2">총 금액:</td>
                <td>${this.calculateTotal()}원</td>
            </tr>
            </table>`;

        return receiptContent;
    }

    displayReceipt(content) {
        this.receiptContent.innerHTML = content;
        this.receiptModal.style.display = 'block';
    }

    closeReceiptModal() {
        this.receiptModal.style.display = 'none';
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + (item.menu.price * item.quantity), 0);
    }

    resetCart() {
        this.cart = [];
        this.updateCart();
    }

    addNewMenu() {
        const name = prompt('메뉴 이름을 입력하세요:');
        const price = parseInt(prompt('메뉴 가격을 입력하세요:'));
        const image = prompt('메뉴 이미지 URL을 입력하세요:');

        if (name && price && image) {
            const newMenu = {
                id: this.menus.length + 1,
                name,
                price,
                image
            };
            this.menus.push(newMenu);
            this.renderMenus();
        }
    }

    displaySalesHistory() {
        let historyContent = `<h2>판매 내역</h2>
            <table>
                <tr>
                    <th>날짜</th>
                    <th>메뉴</th>
                    <th>금액</th>
                </tr>`;

        this.salesHistory.forEach(sale => {
            const date = sale.date.toLocaleString();
            const items = sale.items.map(item => `${item.menu.name} x${item.quantity}`).join(', ');

            historyContent += `
                <tr>
                    <td>${date}</td>
                    <td>${items}</td>
                    <td>${sale.total}원</td>
                </tr>`;
        });

        historyContent += '</table>';
        this.displayReceipt(historyContent);
    }

    resetSalesHistory() {
        this.salesHistory = [];
        alert('판매 내역이 초기화되었습니다.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const kiosk = new Kiosk();
});