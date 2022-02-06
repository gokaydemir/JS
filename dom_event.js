// MOUSE EVENTLERİ
/*document.querySelector('.link').addEventListener('click',tiklanma)
document.querySelector('.link').addEventListener('dblclick',tiklanma)

document.querySelector('.link').addEventListener('mousedown',tiklanma)
document.querySelector('.link').addEventListener('mouseup',tiklanma)

document.querySelector('.link').addEventListener('mouseenter',tiklanma)
document.querySelector('.link').addEventListener('mouseleave',tiklanma)

document.querySelector('.link').addEventListener('mouseover',tiklanma)
document.querySelector('.link').addEventListener('mouseout',tiklanma)

document.querySelector('.container').addEventListener('mousemove',arkaPlaniDegistir)




function tiklanma(e)
{
    let deger
    deger=e.type;
    console.log(deger);
    e.preventDefault()
}

function arkaPlaniDegistir(e){
    document.querySelector('.yazi').textContent=`${e.clientX}`,`${e.clientY}`;} */


   /*const myForm = document.querySelector('#form')
    const ismim=document.querySelector('#isim')
    const sehirler=document.querySelector('#sehir')

    
    //myForm.addEventListener('submit',gonderme)

    //ismim.addEventListener('keydown',gonderme)
    //ismim.addEventListener('keyup',gonderme)
    //ismim.addEventListener('keypress',gonderme)
    
    //ismim.addEventListener('focus',gonderme)
    //ismim.addEventListener('blur',gonderme)

    //ismim.addEventListener('copy',gonderme)
    //ismim.addEventListener('cut',gonderme)
    //ismim.addEventListener('paste',gonderme)

    ismim.addEventListener('input',gonderme)
    sehirler.addEventListener('change',gonderme)
    

    function gonderme(e)
    {
        console.log(e.target.value);
    console.log("Gönderildi " +e.type);
    //document.querySelector('.link').textContent=ismim.value
        e.preventDefault()
    } */ 


    //document.querySelector('.parent').addEventListener('click',(e)=>{console.log('parentt');})
    //document.querySelector('.child').addEventListener('click',(e)=>{console.log('child');})
    //document.querySelector('.item').addEventListener('click',(e)=>{console.log('itemmm');})

    document.querySelector('.parent').addEventListener('click',(e)=>{
        if(e.target.classList.contains('item'))
        {
            console.log('merhaba');
        }
    })