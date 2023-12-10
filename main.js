var productContainer = [];

if( localStorage.getItem('ourProducts') != null)
{
    productContainer = JSON.parse(localStorage.getItem('ourProducts'));
    displayProducts();

}
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');


function addProduct() {

    if(document.getElementById("transfer").innerHTML=="Add Product"){
        var product = {
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            desc:productDescInput.value
        }
        productContainer.push(product);
        localStorage.setItem('ourProducts',JSON.stringify(productContainer));
        displayProducts();
        clearForm();
    }
    else
    {
        updateProduct();
    }
  
}
function clearForm()
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}
function deleteProduct(Index){
    productContainer.splice(Index,1);
    localStorage.setItem('ourProducts',JSON.stringify(productContainer));
    displayProducts();
    
}
function displayProducts()
{
    var hasalah = ``;
    for(var i=0 ; i< productContainer.length ; i++)
    {
        hasalah += 
    `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick='updateProduct(${i})' class="btn btn-outline-info">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>

    </tr>`
    }
     
    document.getElementById("tbdy").innerHTML=hasalah;
}
function searchProduct(term){
    var hasalah = ``;
    for(var i=0 ; i<productContainer.length ;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
            hasalah += 
            `<tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button onclick='updateProduct(${i})' class="btn btn-outline-info">Update</button></td>
                <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>
        
            </tr>` 
        }
    
    }
   
}
function updateProduct(index){
    productNameInput.value = productContainer[index].name;
    productPriceInput.value = productContainer[index].price;
    productCategoryInput.value = productContainer[index].category;
    productDescInput.value = productContainer[index].desc;
  
    document.getElementById("transfer").innerHTML="Update";
    hasalah = 
    `<tr>
        <td>${index}</td>
        <td>${productContainer[index].name}</td>
        <td>${productContainer[index].price}</td>
        <td>${productContainer[index].category}</td>
        <td>${productContainer[index].desc}</td>
        <td><button onclick='updateProduct(${index})' class="btn btn-outline-info">Update</button></td>
        <td><button onclick='deleteProduct(${index})' class="btn btn-outline-danger">delete</button></td>
    </tr>` 

    //document.getElementById("transfer").innerHTML=hasalah;
 

}