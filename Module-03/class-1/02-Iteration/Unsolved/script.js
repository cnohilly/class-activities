// TODO: Write Your JavaScript Code Here
var students = ["Chris","Ati","Braulio","Liv","Lakshmi","Marvan","Caid","Daniel","Valerie"];

for (var i = 0; i < students.length; ++i){
    console.log("Great to see you, " + students[i] + "!");
}

while(students.length > 0){
    console.log("Great to see you, " + students.shift());
}