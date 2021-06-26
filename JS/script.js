function calculateInvoice(starterPrice,maindishPrice, dessertPrice, drinkPrice){

    return starterPrice+maindishPrice+dessertPrice+drinkPrice;

}

var starter = 3.5;
var maindish = 8.9;
var dessert = 3.5;
var drink = 2.5;

console.log("Thank you very much. Here you have your invoice: " + calculateInvoice(starter,maindish, dessert,drink));

var first_client = [0,8.9,0,3];
var second_client = [3.9,0,0,2.2];
var third_client = [0,16.9,4.5,4.7]; //the last index is coffee + soda, the output is strange though; for some reason, it does not like the 4.7

console.log("First invoice: " + calculateInvoice(first_client[0],first_client[1],first_client[2],first_client[3])
            + " second invoice: " + calculateInvoice(second_client[0],second_client[1],second_client[2],second_client[3])
            + " third invoice: " + calculateInvoice(third_client[0],third_client[1],third_client[2],third_client[3]));


function studentInvoice(starterPrice,maindishPrice, dessertPrice, drinkPrice){
    starterPrice = starterPrice*0.9;
    maindishPrice = maindishPrice*0.9;
    dessertPrice = dessertPrice*0.9;
    return starterPrice+maindishPrice+dessertPrice+drinkPrice;
}

console.log("Invoice for students " + studentInvoice(starter,maindish,dessert,drink));
