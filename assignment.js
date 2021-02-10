
//assignment 1
function FeetToMile(num){
    
    var mile=num/5280;
    return mile;
}

var result1=FeetToMile(52800);
console.log(result1);

//assignment 2

function woodCalculator(chair,table,bed){
    wchir=chair*1;
    wtable=table*3;
    wbed=bed*5;
    Totalwood=wchir+wtable+wbed;
    return Totalwood;
}

var result2=woodCalculator(1,2,3);
console.log("total wood neede",result2);

//assignment 3
function brickCalulator(num){
    var bfloor=num;
    var tepfloor;
    var totalfeet;

    if(bfloor>20){

        tepfloor= bfloor-20;
        var tpmbrik=tepfloor*10;
        totalfeet= 150+120+tpmbrik;

    }
    else if(20>=bfloor>10){

        tepfloor= bfloor-10;
        var tpmbrik=tepfloor*12;
        totalfeet= 150+tpmbrik;

    }
    else{
        
        totalfeet= bfloor *15;

    }

    var totalbrick=totalfeet*1000;
    return totalbrick;


}

var result3=brickCalulator(1);
console.log(result3);

//assignment 4



function tinyFriend(name){
    var tiny=name[0];
    
   
    for(var i=0;i<name.length;i++){
        if(tiny.length>name[i].length){
            tiny=name[i];

        }
        

    }
    return tiny;
}

friends=["ern","jdfj","k","dfsl",];

result4=tinyFriend(friends);
 console.log(result4);

