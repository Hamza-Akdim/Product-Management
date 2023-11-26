const addProductBtn = document.querySelector("[data-add-product-btn]");
let addProductForm = document.querySelector(".add-product-form");

addProductBtn.addEventListener("click",()=> {
    console.log("the button is clicked");
    addProductForm.style.display = "block"; // Use '=' instead of '()'
});


