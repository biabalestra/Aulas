
const n1 = 14
const n2 = 7

if(n1>n2){
    console.log(n1)
}
else{console.log(n2)}



const x1 = 33
const x2 = 50
const x3 =21

if(x3>x2 && x2>x1){
    console.log(x3)
}
else if(x3>x2 && x2<x1){console.log(x1)}
else{console.log(x2)}



const x = 3

if(x>0)
{
    console.log("positive")
}

else if(x<0)
{
    console.log("negative")
}
else{console.log("zero")}

const a1 = 90
const a2 = 80
const a3 = 10 

if(a1 + a2 + a3 === 180){console.log('true')}
else{console.log('false')}





const y = 60

if(y>=90 && y<=100){console.log("A")}
else if (y>=80 && y<=100){console.log('B')}
else if (y>=70 && y<=100){console.log('C')}
else if (y>=60 && y<=100){console.log('D')}
else if (y>=50 && y<=100){console.log('E')}
else if (y<50 && y>=0 && y<=100){console.log('F')}
else{console.log('erro')}





const p1 = 1
const p2 = 3
const p3 = 5

if(p1%2 === 0 || p2%2 === 0 || p3%2 === 0){console.log('true')}
else{console.log('false')}





const i1 = 10
const i2 = 16
const i3 = 20

if(i1%2 === 1 || i2%2 === 1 || i3%2 === 1){console.log('true')}
else{console.log('false')}



const c = 15
const v = 20
const l = v-c*1.2

if(c>=0 && v>=0){console.log(l)}
else{console.log('erro')}





let sb = 2800
let inss = 0

if(sb<=1556.94){
    inss=sb-(0.08*sb)
}
else if (sb>1556.94 && sb<=2594.92){
    inss=sb-(0.09*sb)
}
else if(sb>2594.92 && sb<= 5189.82){
    inss=sb-(0.11*sb)
}

else if(sb>5189.82){
    inss=sb-570.88
}

if(inss<=1903.98){
    console.log(inss)
}
else if(inss>1903.98 && inss<=2826.65){
    console.log(inss-(0.075*inss+142.8))
}
else if(inss>2826.65 && inss<=3751.05){
    console.log(inss-(0.15*inss+354.8))
}
else if(inss>3751.05 && inss<=4664.68){
    console.log(inss-(0.225*inss+636.13))
}
else if(inss>4664.68){
    console.log(inss-(0.275*inss+869.36))
}



const numerospares = [8, 2, 10, 4, 6];

for (let i = 0; i < numerospares.length; i+=1) {
    console.log(numerospares[i])}




    let soma = 0

for(let i = 0; i < numerospares.length; i+=1) {
    soma += numerospares[i];
}
console.log(soma);




let summe = 0

for(let i = 0; i < numerospares.length; i+=1) {
    summe += numerospares[i];
    media = soma/numerospares.length
}   
console.log (media)





if( media > 20){
    console.log('valor maior que 20')
}
else {
    console.log('valor menor ou igual a 20')
}



let numeros = [1,7,25,18]
let maior = 0;

for (let i = 0; i < numeros.length; i+=1) {
   if ( numeros[i] > maior ) {
      maior = numeros[i];
   }
}
console.log (maior)






    let nummer = [-331, 13, -118, 20, 17]
    let menor = nummer[0]

    for (let i = 1; i < nummer.length; i+=1) {
       if ( nummer[i] < menor ) {
        menor = nummer[i];
       }
    }
    console.log (menor)





let arranjo = []
let length = 26

for (let i = 1; i < length; i++) {
    arranjo.push(i)
}
console.log(arranjo)





for (let i = 0; i < arranjo.length; i++){
    console.log(arranjo[i]/2)
}




let array = [2,6,19,20]
let impares = 0

for (let i = 0; i < array.length; i+=1){
    if(array[i]%2 == 1){
console.log(array[i])
    }
    }//arrumar esse código























    










    





    
    




    
    




































 
    

        
    