 let myDizi=[5,7,10]


const sayiCarpim=function(sayi){
    return sayi*2
}
const sayiBolme=function(sayi){
    return sayi/2;
}



 const diziIslemleri=function(dizi,islem){
    geciciDizi=[]
    for (let i = 0; i < dizi.length; i++) {
      geciciDizi[i]=islem(dizi[i])
        
    }
    return geciciDizi;
}
console.log(diziIslemleri(myDizi ,sayiCarpim));
console.log(diziIslemleri(myDizi ,sayiBolme));



function adimiBagır(ad,soyad,callback)
{
    const mesaj="Merhaba " +ad.toUpperCase() +" "+soyad.toUpperCase() 
callback(mesaj)
}

adimiBagır("gokay","demir",function(msj){
    console.log(msj);
})


