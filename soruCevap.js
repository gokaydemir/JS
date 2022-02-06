/* 1) Girilen sayıyı Dakika ve Saniye gösteren program
let saniye=parseInt(prompt("Sayi Giriniz","100"))
let dakika=parseInt((saniye/60),10)
let kalanSaniye=saniye%60
console.log(dakika+" dakika "+kalanSaniye+" saniye");
*/


/* 2) Girilen Fahrenait değerini celcius yapan program
let fah=parseInt(prompt("Fahrenait değeri giriniz","100"))
let cel=(5/9)*(fah-32)
console.log(cel);
*/

/* 3) Artık yıl bulan program
let yil=parseInt(prompt("Yıl Giriniz","2020"))
let sonuc=yil%400==0 || yil%4==0 && yil%100!=0
console.log(sonuc);
*/

/* 4) Klavyeden Girilen 3 sayi ortalaması
let sayi1=parseInt(prompt("birinci sayıyı giriniz","1"))
let sayi2=parseInt(prompt("ikinci sayıyı giriniz","1"))
let sayi3=parseInt(prompt("üçüncü sayıyı giriniz","1"))
let toplam=sayi1+sayi2+sayi3;
let sonuc=toplam/3
alert("girilen sayıların ortalaması:" + sonuc);

*/

/* 5) Klavyeden girilen kenara göre üçgen çeşidi bulan program
let birinciKenar=parseInt(prompt("birinci kenar uzunluğu giriniz","1"))
let ikinciKenar=parseInt(prompt("ikinci kenar uzunluğu giriniz","2"))
let ucuncuKenar=parseInt(prompt("üçüncü kenar uzunluğu giriniz","3"))

if((birinciKenar==ikinciKenar)&&(birinciKenar!=ucuncuKenar))
{
    alert("ikiz kenar üçgendir");
}
else if((birinciKenar==ikinciKenar)&&(birinciKenar==ucuncuKenar))
{
    alert("eşit kenar üçgendir");
}
else if((birinciKenar!=ikinciKenar)&&(birinciKenar!=ucuncuKenar)&&(ikinciKenar!=ucuncuKenar))
{
    alert("çeşit kenar üçgendir");
}
*/

/* 6) Klavyeden girilen sayılara göre öğrencinin geçip geçmediğini gösteren program(vize:%40,final:%60,geçme notu:50)
let vize = parseInt(prompt("Vize Notu","5"))
let final=parseInt(prompt("Final Notu","10"))
sonuc=(vize*40/100)+(final*60/100)
if(sonuc<50)
{
    alert("Kaldı")
}
else
{
    alert("Geçti")
}
*/

/*  7) 1 den 100 e kadar sayıların toplamı 
let sonuc=0
for (let i = 0; i<=100; i++) {
   sonuc=sonuc+i
 
    
}
console.log(sonuc);
/*

 /* 8) 1 den 10 a kadar olan sayıları sırayla virgül olucak şekilde yazan program
for (let i = 1; i <=10; i++) {
   
    console.log(i+",");

}
*/

/* 9) Klavyeden girilen sayıya göre Faktöriyel hesaplayan program
let fak=parseInt(prompt("Sayi Giriniz","1"))
let sonuc=1;
for (let i = 1; i <= fak; i++) 
{
    sonuc=sonuc*i;
    
    
}
console.log(sonuc);
*/

/* 10) 100 lük sistemde verilen notları harflik sistemde gösteren program
let not=parseInt(prompt("not giriniz","50"))
if((not<=100) && (not>=85))
{
    alert("A aldınız çok iyi")
}
else if ((not<85) && (not>=70))
{
alert("B aldınız iyi")
}
else if ((not<70) && (not>=55))
{
alert("C aldınız normal")
}
else if ((not<55) && (not>=45))
{
alert("D aldınız kötü")
}
else{
    alert("F aldınız çok kötü")
}
*/

/* 11) Çarpım tablosu oluşturan program
for(let i=1;i<=10;i++)
{
    for (let j = 1; j <= 10; j++) 
    {
        let sonuc=i*j
        console.log(i+"x"+j+":"+sonuc);
    }
  
    
}
*/
/* Girilen Sayiları 0 a bastığında çarpma
let girilenSayi=parseInt(prompt("Sayi Giriniz"))
carpimSonucu=1;
while(girilenSayi!=0)
{
    carpimSonucu=carpimSonucu*girilenSayi
    girilenSayi=parseInt(prompt("Sayi Giriniz"))

}
console.log(carpimSonucu);
*/









