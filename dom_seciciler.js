// TEK ELEMENT SEÇİCİLER
/** console.log(document.getElementById('baslik'));

console.log(document.getElementById('baslik').className);


const baslik=document.getElementById('baslik');
// STİL DEĞİŞTİRME
baslik.style.backgroundColor='yellow';
baslik.style.color='yellow'
baslik.style.padding='2rem'

baslik.textContent='Yeni Başlık'

const text=baslik.textContent
console.log(text);

baslik.innerHTML='<img src="https://yt3.ggpht.com/ytc/AKedOLSaDjkFYa9HkazCIrT4Vu28MaF0E3lfY7E14VoaKHo=s900-c-k-c0x00ffffff-no-rj" alt="" height=80px width=80px>'


console.log(document.querySelector('p'));

console.log(document.querySelector('ul li'));
console.log(document.querySelector('.link.link-google'));

const myListe=(document.querySelector('.liste-item'));
myListe.style.color='blue'

document.querySelector('li:nth-child(2)').style.color='red'
document.querySelector('li:nth-child(3)').style.color='green'
document.querySelector('li:nth-child(4)').style.color='purple'*/

// ÇOKLU ELEMENT SEÇİCİLER
const baslik=document.getElementById('baslik')
baslik.style.color='yellow'
baslik.style.backgroundColor='navy'
console.log(baslik);
const coklu=document.querySelector('ul').getElementsByClassName('liste-item')
console.log(coklu);

coklu[2].style.color='red';
coklu[1].style.backgroundColor='yellow'
coklu[3].textContent='Bursa'

const dizi=Array.from(coklu)
dizi.reverse()
dizi.forEach((liste)=>console.log(liste))

const listeElemanlarim=document.getElementsByTagName('a')
console.log(listeElemanlarim);
const dizim=Array.from(listeElemanlarim)

const yeniOlusum=document.querySelectorAll('li:nth-child(odd)')
yeniOlusum.forEach((sehir)=>{
    sehir.style.color='navy';
   sehir.style.backgroundColor='yellow'
})
console.log(yeniOlusum);

const yeni=document.querySelectorAll('li:nth-child(even)')
yeni.forEach((sehir)=>{
    sehir.style.color='white';
   sehir.style.backgroundColor='orange'
})
console.log(yeni);
