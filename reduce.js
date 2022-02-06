const sayilar=[1,2,3,4]

const sonuc=sayilar.reduce(function(toplam,curr,index)
{
    return toplam=toplam+curr
},0)
console.log(sonuc);


/* const yeniDizi=sayilar.map(function(sayi){
    return sayi*3
})
console.log(yeniDizi);
*/

const yeniDiziwithReduce=sayilar.reduce(function(carpim,sayi){
   carpim.push(sayi*5)
return carpim    
},[])


console.log(yeniDiziwithReduce);

const insanlar=[
    {ad:'Gokay',Numara:2},
    {ad:'Gokay2',Numara:1},
    {ad:'Gokay3',Numara:2},
    {ad:'Gokay4',Numara:1},
    {ad:'Gokay5',Numara:1},
    {ad:'Gokay6',Numara:2},
    {ad:'Gokay7',Numara:2},
]

/* const map =insanlar.map(function(insan){
    return insan.Numara*5
})
console.log(map);
*/

const mapToReduce=insanlar.reduce(function(fn,islem){
    fn.push(islem.Numara*5)
    return fn

},[])
console.log(mapToReduce);


/*const filterMetodu=insanlar.filter((insan)=>insan.Numara===2)
console.log(filterMetodu);
 */

const reduceFilter=insanlar.reduce(function(oankiHali,yeniHali){
    if(yeniHali.Numara===2){
        oankiHali.push(yeniHali)
    }

    return oankiHali;
   
},[])
console.log(reduceFilter);


/* const find=insanlar.find((insan)=>insan.ad==='Gokay5')
console.log(find);*/

const findToReduce=insanlar.reduce(function(pre,curr,index)
{
if(curr.ad==='Gokay2'){
    return curr;
}
else{
    return pre;
}

},undefined)
console.log(findToReduce);







/* 
function sayilariTopla(sayi)
{
    let sonuc=0;
    for (let i = 0; i < sayi.length; i++) {
        sonuc=sonuc+sayi[i];
    }
return sonuc
}
console.log(sayilariTopla(sayilar)); 
*/


 
