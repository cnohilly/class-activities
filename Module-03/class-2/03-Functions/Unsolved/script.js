// TODO: Write Your JavaScript Code Here
function checkEqual(arg1, arg2) {
    if (arg1 === arg2) {
        console.log("They are equal in type and value");
    } else if (arg1 == arg2) {
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }

    // switch (true) {
    //     case arg1 === arg2:
    //         console.log("They are equal in type and value");
    //         break;
    //     case arg1 == arg2:
    //         console.log("They are equal in value");
    //         break;
    //     default:
    //         console.log("The values are not equal");
    // }
}

checkEqual("1",1);
checkEqual("one","one");
checkEqual("one",1);
checkEqual("ONE","one");

