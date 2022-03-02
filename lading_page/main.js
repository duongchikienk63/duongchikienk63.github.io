// function swap(a,b) {
//     var tmp = a;
//     a=b;
//     b=tmp
// }

// var x=4; 
// var y= x++;
// var z = ++x;
// console.log(x,y,z)

for (let i = 0; i<5;i++) {
    var temp = "*";
    for(let j = 0; j <5;j++){
        if(i>=j){
            temp+="*";
        }
    }
}
console.log(temp)