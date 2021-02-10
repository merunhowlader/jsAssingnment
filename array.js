var number=[45,65,78,12,3,54,65];


function GetAraysum(number){
    var sum=0;
    for(var i=0; i<number.length;i++){
        var element =number[i];
        sum=sum + element;
    }
    return sum;
}

var result=GetAraysum(number);



console.log("total of the number", result);

var nemr=[2,5,6,3,2,6,3,69,4];
var uniquname=[];

for( var i=0;i<nemr.length;i++){
    var element = nemr[i];
    var index=uniquname.indexOf(element);
    if(index==-1){
        uniquname.push(element);
    }
}
console.log(uniquname);