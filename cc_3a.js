let customer = [{
    name: "Elijah", 
    email: "ElijahMikaelson@gmail.com",
    purchases: ["Oranges" ,"Apples","coffee"] 
},
{name: "Haley", 
    email: "Hope34@gmail.com",
    purchases: ["Sprite","fruit", "snacks","Ice cream"]
},
{name: "Klaus", 
    email: "Moonstone@gmail.com",
    purchases: ["Paint","Bourbon","Tea"]
},
];
customer.push({name:"Jackson",email:"FullMoon101@AOL.com", purchases: ["Protein powder","fruit", "Beef","Milk"]});
console.log(customer);
customer.shift({name: "Elijah",  email: "ElijahMikaelson@gmail.com", purchases: ["Oranges" ,"Apples","coffee"] },)
console.log(customer);
customer[1]= ({name: "Klaus", email: "MyHope@gmail.com",purchases: ["Paint","Bourbon","Tea"]});
console.log(customer);
customer.push({name: "Haley",email: "Hope34@gmail.com",purchases: ["Formula","fruit", "snacks","Diapers"],});
console.log(customer);
customer.forEach(customer =>{console.log(`name: ${customer.name},email: ${customer.email}, Total purchases: ${purchases}`);})
