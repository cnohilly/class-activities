// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = window.prompt("What is your number?");;
var expression1 = x < 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here
// It is done when the message "True ✅ True ✅" is logged when both `expression1` and `expression2` are true.
if (expression1 && expression2){
    console.log("True ✅ True ✅");
}
// It is done when the message "True ✅ False ❌" is logged when `expression1` is true.
 else if (expression1){
    console.log("True ✅ False ❌");
}
// It is done when the message "False ❌ True ✅" is logged when `expression2` is true.
 else if (expression2){
    console.log("False ❌ True ✅");
}
// It is done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false.
 else {
    console.log("False ❌ False ❌");
}



switch (true) {
    case expression1 && expression2: console.log("True True");
        break;
    case expression1: console.log("True False");
        break;
    case expression2: console.log("False True");
        break;
    default:
        console.log("False False");
}