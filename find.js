const kisiler=[
    {id:1,ad:'Gökay'},
    {id:2,ad:'Kenan'},
    {id:3,ad:'Aysu'},
    {id:2,ad:'Gökçe'},
    {id:5,ad:'Hüseyin'},
    {id:6,ad:'Tülay'},
    {id:7,ad:'Yasin'},
    {id:8,ad:'Batuhan'},
]

const idBul=kisiler.find((kisi)=>kisi.id===2)
console.log(idBul);

function bulma(idAdi) {
    const yeniDizi=[];
    for (let i = 0; i < idAdi.length; i++) {
        if(idAdi[i].id===2){
            yeniDizi.push(idAdi[i])
        }
        
    }
    return yeniDizi;
    
}
console.log(bulma(kisiler));

function kendiFindMetodum(kisiler,aranilanDeger) {
    let bulunanEleman=undefined;
    for (let i = 0; i < kisiler.length; i++) {
      if(aranilanDeger(kisiler[i])){
          return kisiler[i]
      }  
        
    }
    return bulunanEleman
    

}
const sonuc=kendiFindMetodum(kisiler,function (kisi) {
    return kisi.id===5;
}) 
console.log(sonuc);