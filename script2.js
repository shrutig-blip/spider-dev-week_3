// simple billing system
let customers=prompt("enter no. of customers");
for(let i=0;i<customers;i++){

    let products=prompt("enter no. of products");
    let items=[];
    let quantities=[];
    let price_each=[];
    let prices=[];
    let discounted_price=[];
    let bill=0;
    let actual_amount=0;
    let total_discount=0;
    let total_bill=0;
    let final_bill=0;
    let highestprice=0;
    let index=0;
    let expensive_Product="";

    for(let i=0;i<products;i++){
        let ProductName = prompt("Enter product Name:");
        let quantity=Number(prompt("enter quantity of product:"));
        let price= Number(prompt("enter price of product"));
        items.push(ProductName);
        quantities.push(quantity);
        price_each.push(price);
        if(price>highestprice){
            highestprice=price;
            expensive_Product=ProductName;
    
        }

        // Calculations
        bill=price*quantity;
        prices.push(bill);

        //discount
        let discount=0;
        if(bill>10000){
            discount=0.1*bill;
        }
        else if(bill>4000){
            discount=0.06*bill;
        }
        else{
            discount=0.04*bill;
        }

        actual_amount+=price*quantity;
        discounted_price.push(bill-discount);
        total_discount+=discount;



    }

    for (let i=0;i<products;i++){
        total_bill+=discounted_price[i];

    }

    //GST calculation
    let gst_rate=10;
    let gst_amount=(total_bill*gst_rate)/100;
    final_bill=total_bill+gst_amount;

    // user switch to display payment method details
    let medium = prompt("enter medium (Cash ,UPI ,Card):");
    switch (medium.toLowerCase()) {
        case "cash":
            console.log("payment done in Cash.\nThank you for shopping!!");
            break;
        case "upi":
            console.log("payment done through UPI.\nThank you for shopping!!");
            break;
        case "card":
            console.log("payment done by Card.\nThank you for shopping!!");
            break;
        default:
            console.log("Invalid medium entered.");
    }




    // Display the formatted bill with GST
    console.log("------ Formatted Bill ------");
    console.log("----------------------------");
    for (let i = 0; i < products; i++) {
        console.log("product purchased:" + items[i] +
            "\nquantity taken: " + quantities[i] +
            "\nprice of each:" + price_each[i] +
            "\n------------------------------"+
            "\ntotal price of product after discount:"+ discounted_price[i] + 
            "\n\n");
    }
    console.log("----------------------------");
    console.log("Total price without discount:", actual_amount);
    console.log("Total discount given:", total_discount);
    console.log("Total price with discount:", total_bill);
    console.log("GST included with 10% GST rate:", gst_amount);
    console.log("----------------------------");
    console.log("Final Bill", final_bill);

    console.log("most expensive product bought is "+expensive_Product +" having actual price="+highestprice);
    





}
