class CartItems {
    constructor(item) {
      this.item = item;
      console.log('ESTE EL ITEM', this.item);
      this.selectedItems = [];
      this.totalContainer = document.getElementById("shoppingCartTotal");
      this.clearButton = document.getElementById('clearShoppingCart')
      this.clearButton.addEventListener("click", () => {
        this.clearCart()
      });
      this.errorMessage = ''
    }
  
    addItem(id) {
      let addedItem = this.selectedItems.find(item => item.id === id)
      let newItem = this.item.find(newItem => newItem.id === id)

      if(addedItem) {
        addedItem.cartQuantity = addedItem.cartQuantity + 1

        // MANEJO DE STOCK
        if(addedItem.stock === 0){
          alert(`El producto ${addedItem.name} no tiene más unidades disponibles`)
        }else if(addedItem.stock > 0){
          addedItem.stock = addedItem.stock - 1
        }
        this.showItems()

        console.log('STOCK ORIGINAL', addedItem.stock);
      }else{

        newItem.cartQuantity = newItem.cartQuantity + 1
        this.selectedItems.push(newItem);

        // MANEJO DE STOCK
        if(newItem.stock === 0){
          alert(`Lo sentimos, el producto ${newItem.name} no tiene más unidades disponibles`)
        }else if(newItem.stock > 0){
          newItem.stock = newItem.stock - 1
        }
        this.showItems()
        // console.log('STOCK ORIGINAL NUEVO PRODUCTO', newItem.stock);
      }
      // console.log('ITEMS SELECCIONADOS',this.selectedItems);
    }
  
    deleteItem(id) {
      // console.log('ID PARAMETRO DELETE', id)
      // console.log('CANTIDAD PARAMETRO DELETE',cartQuantity);
      let deletedItem = this.selectedItems.find(item => item.id === id)
      // console.log('ITEM ELIMINADO', deletedItem);
      deletedItem.stock = deletedItem.stock + deletedItem.cartQuantity
      deletedItem.cartQuantity = 0
      // console.log('STOCK RESTAURADO', deletedItem.stock);

      const filteredItems = this.selectedItems.filter((element) => element.id !== id);
      this.selectedItems = filteredItems;
      
      this.showItems();
      
      // console.log('ACCION BORRAR',this.selectedItems);
    }

    handleQuantity(object) {
      const { type, id } = object
      let product = this.item.find(newItem => newItem.id === id)
      
      if(product.stock >= 1){
      if(type === 'add'){
          product.cartQuantity = product.cartQuantity + 1
          product.stock = product.stock - 1
          
        }
      else if(type === 'subtract'){
        if(product.cartQuantity > 1){
          product.cartQuantity = product.cartQuantity - 1
          product.stock = product.stock + 1
        }
      }
      this.showItems()
      console.log('CART QUANTITY', product.cartQuantity);
      console.log('STOCK', product.stock);
    }else if(product.stock === 0){
      this.errorMessage = `Aviso: Inventario insuficiente`
      this.showItems()
    }
      

    }

    clearCart(){
      this.selectedItems.splice(0, this.selectedItems.length)
      this.showItems()
      console.log('STOCK FINAL', this.item);
    }

    
    showItems() {
      let cartProducts = "";
      let total = 0;

      for (let i = 0; i < this.selectedItems.length; i++) {
        let selectedItems = `<li class="list-group-item d-flex flex-row justify-content-around align-items-center">
          
          <img
            src="${this.selectedItems[i].img}"
            class="item-img"
            alt="${this.selectedItems[i].name}"
          />
          <p>${this.selectedItems[i].name}</p>
          <p> $ ${this.selectedItems[i].price}</p>
          <p> ${this.selectedItems[i].cartQuantity}</p>
    

          <button type="button" class="btn btn-danger" onclick="quantityEvent({ type: 'add', id: ${this.selectedItems[i].id}});"> + </button>
          <button type="button" class="btn btn-danger" onclick="quantityEvent({ type: 'subtract', id: ${this.selectedItems[i].id} });"> - </button>

          <button type="button" class="btn btn-danger" onclick="deleteEvent(${this.selectedItems[i].id});"> X </button>
          <p>${this.errorMessage}</p>
        </li>`;
        cartProducts += selectedItems;
        total += this.selectedItems[i].price * this.selectedItems[i].cartQuantity;
      }
      document.getElementById("shoppingCartList").innerHTML = cartProducts;
      this.totalContainer.textContent = "Total: " + total; 
    }
  }