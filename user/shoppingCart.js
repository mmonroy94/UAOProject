class CartItems {
    constructor(item) {
      this.item = item;
      this.selectedItems = [];
    }
  
    addItem(id) {
      this.selectedItems.push(this.item[id]);
      this.showItems();
    }
  
    deleteItem(id) {
      this.selectedItems.splice(id, 1);
      this.showItems();
    }
    
    showItems() {
      let cartProducts = "";
      let total = 0;
      let totalContainer = document.getElementById("shoppingCartTotal"); 

      for (let i = 0; i < this.selectedItems.length; i++) {
        let selectedItems = `<li class="list-group-item d-flex flex-row justify-content-around align-items-center">
          <img
            src="${this.selectedItems[i].img}"
            class="item-img"
            alt="${this.selectedItems[i].name}"
          />
          <p>${this.selectedItems[i].name}</p>
          <p> $ ${this.selectedItems[i].price}</p>
          <button type="button" class="btn btn-danger" onclick="deleteEvent(${i});"> X </button>
        </li>`;
        cartProducts += selectedItems;
        total += this.selectedItems[i].price;
      }
      document.getElementById("shoppingCartList").innerHTML = cartProducts;
      totalContainer.textContent = "Total: " + total; 
// Agrega el elemento <p> como hijo del elemento con ID "shoppingCartTotal"

    }
  }