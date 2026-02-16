let inventory={};
const products =[
{name: "Dell Desktop",category: "electronics",price: 799.50,InventoryCount: "50"},
{name: "Crop top",category:"apparel",price: 15.50,InventoryCount:"45"},
{name:"Apples",category:"groceries",price: 5.99,InventoryCount:"30"},
{name:"Dish towels",category:"household",price:6.50,InventoryCount:"60"},
{name:"Dish soap",category:"household",price:7.60,InventoryCount:"60"}
]
   for (const products of products){
    let discount = 0;
    switch(products.category){
        case"electronics":
        discount = 0.20;
        break;
    case"apparel":
    discount = 0.15
    break;
case"groceries":
discount =0.10
break;
case"household":
discount=0.10
break;
default:
    discount = 0;
    }
     products.discountedPrice = products.price * (1-discount);
     products.discount = discount;
   }
   let customerType = "senior"
   function applyCustomerDiscount(basePrice,customerType){
    let additionalDiscount = 0;
   
   if (customerType === "senior" ) {
    console.log(additionalDiscount = 0.07)
   } else if (customerType === "student"){
    console.log(additionalDiscount = 0.05)
   } else {
    function applyCustomerDiscount(basePrice,customerType){
    console.log(additionalDiscount = 0)
   }}
return basePrice *(1 - additionalDiscount);
   }
   for (let customerNum = 1; customerNum <= 3;customerNum ++){
    console.log(`Customer ${customerNum}:`);
    const types = ["regular","student","senior"];
    const assignedType = types[Math.floor(Math.random()*types.length)];
    console.log(`Customer Type: ${assignedType}`);
    let totalCost = 0;

    const customerCart = [];
   }
for (let i = 0; i < 2; i++){
    const product = products[i];
    if(product.InventoryCount > 0){
        const finalPrice = applyCustomerDiscount(product.discountedPrice, assignedType);
        customerCart.push({...product, finalPrice});
        totalCost += finalPrice;
        product.InventoryCount -= 1;
    }

}
console.log(`Total Cost: $${totalCost.toFixed(2)}`);
console.log("---\n");
const sampleProduct = products[0];
console.log(`Product: ${sampleProduct.name}`);

for(const key in sampleProduct){
    console.log( ` ${key}: ${sampleProduct[key]}`);
}
for (const product of products){
    const entries = Object.entries(product);
    console.log(`${product.name}: `);

    for(const [key, value] of entries){
        if(typeof value === "number"){
            console.log(` $ {key}: ${value}`);
        }
    }
    console.log();
}


