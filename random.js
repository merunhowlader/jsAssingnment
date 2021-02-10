var num=2.09989;
var result=Math.floor(num);
var result2=Math.ceil(num);
var result3=Math.round(num);
for(var i=0;i<10;i++){
    var randomNum=Math.random()*6;
var Output=Math.round(randomNum);
console.log(Output);

}

var business =350;
var minister=750;
var sochib=550;

// if(business>minister){
    
//     if(business>sochib){
//         console.log("busines is bigger");
//     }
//     else{
//         console.log("sochib is bigger");
//     }
// }
// else{
//     if(minister>sochib){
//         console.log("Minister is bigger");
//     }
//     else{
//         console.log("sochib is bigger");
//     }
    
    
// }

var max=Math.max(business,minister,sochib);
console.log(max);

var marks=[45,67,4,64,56,64,78,2,9];

var max =marks[0];

for(var i=0;i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max=element;
    }
}
console.log("higest value is: ",max);