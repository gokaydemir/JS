let gokay={

    adi:'Gökay',
    soyadi:'Demir',
    dogumYili:1999,
    evliMi:false,
    sevdigiRenk:['siyah','mavi'],
    yasiHesapla()
    {
        let suankiZaman=2022;
        return suankiZaman-this.dogumYili;
        
    }
    
    
}

let aysu={

    adi:'Aysu',
    soyadi:'Kavuk',
    dogumYili:2000,
    evliMi:false,
    sevdigiRenk:['siyah','yesil'],
    yasiHesapla()
    {
        let suankiZaman=2022;
        return suankiZaman-this.dogumYili;
        
    }
    
    
}

let ogrenciler=[gokay,aysu]
aysu.soyadi="Demir"
console.log(ogrenciler[1].adi);

console.log(gokay.yasiHesapla());

console.log(aysu.yasiHesapla());

// Referans Tipleri
let sayi=5;
let yeniSayi=sayi;
sayi=20;
console.log(sayi,yeniSayi);

let isim=["ali","ahmet","defne"]
let yeniIsim=isim
isim=["aslı","gökay"]
isim.push("aysu")
console.log(isim,yeniIsim);

let ogrenci={
  ad:'Gökay',
  soyad:'Demir',
  yas:22, 
}
let ogrenen=ogrenci
ogrenci={
    ad:"ALİ",
    soyad:"Çalgın",
    yas:10,
}
ogrenci.yas=32

console.log(ogrenen,ogrenci);
 
let s1=5;
let kaa=10

let yeniDizi=[1,2,3]

const diziElemanlarınıIkiyleCarp = function(dizi){
   let geciciDizi=[];
    for (let i= 0; i <dizi.length; i++) {
        geciciDizi[i]=dizi[i]*2
    }
    return geciciDizi;
    }
console.log(diziElemanlarınıIkiyleCarp(yeniDizi));
console.log(yeniDizi);