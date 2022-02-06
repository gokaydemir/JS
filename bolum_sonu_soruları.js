// SORU 1 SEHİRLER DİZİSİ OLUSTURULUP Z DEN A YA SIRALANCAK

const sehirler=[
    {ad:'İstanbul',plaka:34,komsu:'Tekirdağ'},
    {ad:'Ankara',plaka:06,komsu:'Kırıkkale'},
    {ad:'Erzincan',plaka:24,komsu:'Eruzurum'},
    {ad:'Adana',plaka:01,komsu:'Mersin'},
    {ad:'Canakkale',plaka:17,komsu:'Balıkesir'},

]

const sirala=sehirler.sort(function(a,b){
    if(a.ad>b.ad)
    {
        return -1
    }
    else if(a.ad<b.ad)
    {
        return 1
    }
    else{
        return 0
    }

    
})
console.log(sirala);


 



// SORU 2 Ögrenci Dizesi oluşturup id si çift olanları alıp a dan z ye sıralama

const ogrenciler=[
    {ad:'Gökay',soyad:'Demir',Id:1},
    {ad:'Gökçe',soyad:'Demir',Id:2},
    {ad:'Volkan',soyad:'Demirel',Id:3},
    {ad:'Batuhan',soyad:'Aydöner',Id:4},
    {ad:'Yasin',soyad:'Özgen',Id:5},
    {ad:'Mahmud',soyad:'Mahdum',Id:6},
    {ad:'Batın',soyad:'Erel',Id:7},
    {ad:'Aysu',soyad:'Kavuk',Id:8},
]

    const kisiler = ogrenciler.filter(ogrenci=>ogrenci.Id%2===0)
   .map(ogrenci=>ogrenci.ad+" "+ogrenci.soyad)
    .sort()
   console.log(kisiler);




