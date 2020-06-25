let no: number = 20;

if(no > 30) {
    console.log("no is greater than thirty");

    if(no < 100) {
        console.log("but less than 100");
    }
}
else if(no > 20) {
    no = no + 20;
    console.log("incrmented no");
} else {

}


switch(no) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Unknown");
}