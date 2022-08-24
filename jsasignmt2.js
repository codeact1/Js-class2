let productName = prompt("Enter product name: ");
let price = prompt("Enter price: ");
let quantity = prompt("Enter quantity: ");
const taxes = .11;
let subtotal=(price*quantity)*taxes;
let finalPrice = (price*quantity)+subtotal;
let number = 5;

if(number > 5){
    console.log(productName, price, quantity,finalPrice);
}else if(number < 5){
    console.log(productName, price, quantity,finalPrice);

}    

document.getElementById("productInfo").innerHTML=`
    <h2>Reciept</h2>
    <hr>
    <p> Product Name: ${productName}</p>
    <p> Price:$ ${price}</p>
    <p> Quantity: ${quantity}</p>
    <p> Tax:$ ${subtotal}</p>
    <hr>
    <p> Final Price:$ ${finalPrice}</p>
`; 

