const sayilar=[1,2,3,4,5,6,7,8,9]

function sonucuBul(){
    const filterYapisi=sayilar.filter((sayi)=>sayi%2==1)
const mapDizisi=filterYapisi.map((karesi)=>karesi*karesi)
const reduceOlustur=mapDizisi.reduce(function(pre,buyuk){
if(buyuk>10)
{
    return pre=pre+buyuk 
}
return pre
},0)

console.log(reduceOlustur);
}
sonucuBul(sayilar)