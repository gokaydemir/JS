/*
localStorage.setItem('ad','gökay')
localStorage.setItem('yas','22')


sessionStorage.setItem('il','ankara')

console.log(localStorage.getItem('yas'));*/
const ulListesi=document.querySelector('.liste')
const yeniDizi=JSON.parse(localStorage.getItem('sonuc'))

yeniDizi.forEach(e => {
    const li=document.createElement('li')
    li.textContent=e
    ulListesi.appendChild(li)
    
});

document.querySelector('#form').addEventListener('submit',function(e){
    const yazi=document.querySelector('.yazi').value
    let yeniDizi;
    if(localStorage.getItem('sonuc')===null)
    {
        yeniDizi=[];
    }
    else{
        yeniDizi=JSON.parse(localStorage.getItem('sonuc'))
        yeniDizi.push(yazi)
    }
    localStorage.setItem('sonuc',JSON.stringify(yeniDizi))

    const li=document.createElement('li')
    li.textContent=yazi
    ulListesi.appendChild(li)
    
    })
    
    

