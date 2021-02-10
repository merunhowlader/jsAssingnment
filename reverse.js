function reverserString(str){
var reverse="";
for(var i=0;i<str.length;i++){
    var char= str[i];
    reverse=char+reverse;
}
return reverse;

}
var s="i am merun kanti howlader .how are you";
var al=reverserString(s);
console.log(al);
