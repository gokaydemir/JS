
/*
const kucuktenBuyuge=isimler.sort()
console.log(kucuktenBuyuge);

const buyuktenKucuge=kucuktenBuyuge.reverse()
console.log(buyuktenKucuge);

const sayilariBuyuktenKucugeSirala=sayilar.sort((a,b)=>b-a)
console.log(sayilariBuyuktenKucugeSirala);

const sayilariKucuktenBuyugeSirala=sayilar.sort((a,b)=>a-b)
console.log(sayilariKucuktenBuyugeSirala);

const kisiIdSiralama=kisiler.sort((a,b)=>b.id-a.id)
console.log(kisiIdSiralama);

const kisiYasSirlama=kisiler.sort((a,b)=>a.yas-b.yas)
console.log(kisiYasSirlama);

const kisiAdiSiralama=kisiler.sort(function(a,b){
    return (a.isim>b.isim)?1:(a.isim<b.isim)?-1:0
})
console.log(kisiAdiSiralama);
*/
 const isimler=['gokay','ali','emre','murat']

 const sayilar=[2,52,16,52,25,82,54]

 const kisiler=[
   {id:2,isim:'gokay',yas:22},
   {id:24,isim:'gokce',yas:20},
   {id:12,isim:'batuhan',yas:21},
   {id:10,isim:'yasin',yas:23},
   {id:8,isim:'aysu',yas:21},
   {id:9,isim:'kerim',yas:25},
 ]

 const kopya=[]

 for(isim of isimler)
kopya.push(isim)
kopya.sort()

console.log(isimler);
console.log(kopya);

const yeniDizi=[1,50,8]

let yeniOlustur=[...yeniDizi]
yeniOlustur.sort((a,b)=>a-b)
console.log(yeniOlustur);

function sayilariTopla(...parametre)
{
  let toplam=0;
  for(s of parametre){
    toplam=toplam+s
  }
  console.log(toplam);
}
sayilariTopla(5,6,7,7,9,5,5,4,1,2,2,6,8,7,8,5,1,2,5,5)


