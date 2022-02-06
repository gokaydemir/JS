const yeni=document.createElement('li')
yeni.className='liste-item'
yeni.id='liste'
yeni.textContent='Bursa'
yeni.setAttribute('deger','yeni-deger')

document.querySelector('ul').appendChild(yeni)
console.log(yeni);

const yeniDeger=document.createElement('h6')

yeniDeger.textContent='Yeni Başlik'
yeniDeger.id='baslik'
yeniDeger.className='baslik'
console.log(yeniDeger);

const buyukBaslik=document.querySelector('h2')
const parents=document.querySelector('body')

parents.replaceChild(yeniDeger,buyukBaslik)


document.querySelector('ul').removeChild(document.querySelectorAll('li')[3])
document.querySelector('form').removeChild(document.querySelector('input'))
