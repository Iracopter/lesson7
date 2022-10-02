//TASK 1

var a= prompt("Завдання 1. Введіть число a =","");
var b= prompt("Завдання 1. Введіть число b, менше а =","");
var k=0;
if(Number(a)<=b){
console.log("Число a<=b, що не відповідає умовам завдання");
}
else{
    while(Number(a)>b){
         a-=b;
    }
    console.log("Довжина вільної частини а=",a);
}




//TASK 2

var n=prompt("Завдання 2. Введіть число n =","");
while(n>=10){
    console.log(Math.round(n%10));
    //console.log(Math.round(n/10));
    n-=Math.round(n%10);
    n/=10;
}
console.log(Math.round(n%10));


//TASK 3 

var a= prompt("Завдання 3. Введіть число a =","");
var b= prompt("Завдання 3. Введіть число b =","");
var sum=0;
for(var i=Number(a); i<=b; i++){
    sum=sum+i;
}
console.log("Сума =",sum);


//TASK 4

var n=prompt("Завдання 4. Введіть число n =","");
var fact=1;
for(var i=1; i<=n; i++){
    fact*=i;
}
console.log("Факторіал числа n =",fact);


// TASK 5 
var arr= new Array();
var n;
var sum=0;
do{
    n=prompt("Введіть число =","");
    arr.push(Number(n));
}
while((n!="")&&(isNaN(n)!=true)&&(n!=null)){
    arr.pop(n);
}
for(var i=0; i<arr.length; i++){
    sum+=arr[i];
    console.log(arr[i]);
}
console.log(sum);



//TASK 6

var a= prompt("Завдання 6. Введіть число a =","");
var b= prompt("Завдання 6. Введіть число b =","");
var k=0;
s=1;
if(Number(a)>=b){
    console.log("Помилка, a>b!");
}
else{
    for(var i=Number(a); i<=b; i++){
        while(k<s){
            console.log(i);
            k++;
        }
        s++;
        k=0;
    }
}

