let arabaMarkalari=["BMW","AUDI","MERCEDES","VOLVO"]
arabaMarkalari[1]="CITROEN"
arabaMarkalari[4]="HONDA"
console.log(arabaMarkalari[4]);
console.log(arabaMarkalari);

for (let i =0; i < arabaMarkalari.length; i++) {

    console.log(arabaMarkalari[i]);
    
}
console.log("**************************");

for(let oankiElemanlar of arabaMarkalari){
    console.log(oankiElemanlar);
}

let isimler=["ali","ayse","ahmet"]

console.log(isimler.toString());

console.log(isimler.join(" / "));

console.log(isimler.push("aysu"));


let cikarilan=isimler.pop()
console.log(isimler+" çıkarlan isim : " + cikarilan);

delete isimler[2]
console.log(isimler.toString());

isimler.unshift("aslı")
console.log(isimler.toString());

let sayilar=[1,2,3,4,5,6,7,8]

sayilar.splice(0,3,1,2,3)
console.log(sayilar.toString());

let tekSayilar=[1,3,5]
let ciftSayilar=[2,4,6]

let sayilarr=tekSayilar.concat(7,9)
console.log(sayilarr.toString());
