const bitkiler =[
    {ad:'kereviz',tur:'sebze'},
    {ad:'çilek',tur:'meyve'},
    {ad:'kavun',tur:'meyve'},
    {ad:'havuç',tur:'sebze'},
    {ad:'brokoli',tur:'sebze'},
    {ad:'muz',tur:'meyve'},

]

const meyveler=bitkiler.filter((meyve)=>meyve.tur==='meyve')
console.log(meyveler);

const sebzeler =bitkiler.filter((sebze)=>sebze.tur==='sebze')
console.log(sebzeler);


function meyveleriBul(meyve){
    const geciciDizi=[]
    for(i=0;i<meyve.length;i++)
    {
        if(meyve[i].tur==='meyve'){
            geciciDizi.push(meyve[i].ad)
        }
    }
    return geciciDizi;
}
console.log(meyveleriBul(bitkiler));


const sehirler=[
    {ad:'İstanbul',kod:34,bolge:'Marmara'},
    {ad:'Antalya',kod:07,bolge:'Akdeniz'},
    {ad:'Trabzon',kod:61,bolge:'Karadeniz'},
    {ad:'Bursa',kod:16,bolge:'Marmara'},
    {ad:'Samsun',kod:55,bolge:'Karadeniz'}
]

const sehirBul=sehirler.filter((sehir)=>sehir.kod===61||sehir.bolge==='Marmara')
console.log(sehirBul);


function sehirBulmaca(sehir) {
    const yeniDizi=[];
    for (let i = 0; i < sehir.length; i++) {
        if(sehir[i].bolge==='Marmara')
        {
            yeniDizi.push(sehir[i])
        }
    }
    return yeniDizi;

}
console.log(sehirBulmaca(sehirler));