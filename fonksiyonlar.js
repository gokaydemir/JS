let sonuc=0;
for (let i = 0; i <= 10; i++) {
   
    sonuc=sonuc+i
    
}

selamVer()
function selamVer() {
  console.log("Merhaba Dünya");

}
function sayilariTopla(sayi1,sayi2){
  
  return sayi1+sayi2
  
}
let toplam=sayilariTopla(10,50)
console.log(toplam);

function saylarinTopalmi(baslangicSayisi,bitisSayisi) {
  let kalan=0
  for (let i= baslangicSayisi; i <=bitisSayisi; i++) {
    kalan=kalan+i
     }
     console.log(kalan);
}
saylarinTopalmi(10,20)
saylarinTopalmi(30,60)

function tekrarla(startValue, endValue) {
  if (startValue <= endValue) {
      console.log("abcdefg");
      startValue++;
      tekrarla(startValue,endValue);
  } 
}
tekrarla(1,3);

const fatArrow=()=>{
console.log("Merhaba Fat Arrow");
}
fatArrow()

function karesiniAl(sayi){
  return sayi*sayi
}


const karesiniAlDegisken=function(sayi){
  return sayi*sayi
}

const fatArrowParametre = (sayi)=>{
  return sayi*sayi
}

const sayilariCarp=(s1,s2)=>s1*s2;

console.log(karesiniAl(7));
console.log(karesiniAlDegisken(8));
console.log(fatArrowParametre(9));
console.log(sayilariCarp(2,70));


const fonk=function(s2)
{
    s2=s2*2
    return s2
}
console.log(fonk(s1));

let sayilar=[1,2,3,4,5,6]
sayilar.forEach(function(sayi,i)
{
    console.log(sayi,i);
});
