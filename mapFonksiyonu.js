const sayilar=[1,2,3,4,5,6,7];

const yeniSayi=sayilar.map(function (sayi)
{
    return sayi*2;
}
); 
console.log(sayilar);
console.log(yeniSayi);

const kitaplar=[
    {ad:'1', sayfa:30},
    {ad:'2', sayfa:40},
    {ad:'3', sayfa:60},
    {ad:'4', sayfa:70},
    {ad:'5', sayfa:80},
    {ad:'6', sayfa:90},
    {ad:'7', sayfa:100},
    {ad:'8', sayfa:110},
    {ad:'9', sayfa:150},
    {ad:'10', sayfa:250},
    {ad:'11', sayfa:350},
    {ad:'12', sayfa:450},
    {ad:'13', sayfa:550},


]
const sayfalarim=kitaplar.map((kitap)=>kitap.sayfa)
console.log(sayfalarim);

const adlar=kitaplar.map((kitap)=>kitap.ad)
console.log(adlar);

const carpim=kitaplar.map((kitap) =>kitap.sayfa*2)

   

console.log(carpim);

console.log(kitaplar);

const kisiler=[
    {ad:'gokay',soyad:'demir'},
    {ad:'asyu',soyad:'kavuk'},
    {ad:'yasin',soyad:'özgen'},

]
const isimler=kisiler.map((kisi)=> kisi.ad)
console.log(isimler);
console.log(kisiler);

