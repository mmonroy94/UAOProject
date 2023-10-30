
/// CREACION DE PRODUCTOS EN EL STOCK - PDTEEE!!!!!!!!

const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  console.log("Formulario enviado"); // Agrega esta línea

  // Obtiene los valores ingresados en el formulario
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription = document.getElementById("productDescription").value;
  const productImage = document.getElementById("productImage").value;

  // Crea un nuevo objeto de producto con los valores del formulario
  const newProduct = {
    id: stock.length + 1, // Genera un nuevo ID
    name: productName,
    price: parseFloat(productPrice), // Convierte el precio a número
    description: productDescription,
    img: productImage,
    cartQuantity: 0,
    stock: 10, // Puedes ajustar el stock según tus necesidades
  };

  // Agrega el nuevo producto al array 'stock'
  stock.push(newProduct);

  // Limpia el formulario después de agregar el producto
  createProductForm.reset();
  
});

