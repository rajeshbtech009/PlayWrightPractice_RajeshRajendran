type paymentMethods = "UPI" |"Creditcard" | "Paypal"

function fun(pay:paymentMethods){
    if(pay === "UPI"){
        console.log("UPI payment chosen");
    }
    else if(pay === "Creditcard"){
        console.log("Credit card payment chosen");
    }
    else{
        console.log("Paypal payment chosen");
    }
}

fun("UPI")
fun("Creditcard")
fun("Paypal")