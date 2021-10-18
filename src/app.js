console.log("Merhaba teknotower")

// 22:20'de mola bitiyor. Tekrar Başlayacağız.
// JS  TypeSafe değildir. Yani ne yazarsan onu yorumlar
// var ile değişken tanımlamayı bırakıyoruz. Lokal olan LET'i kullanıyoruz.
// const veri tipi = Sabit değer


let ilkDegisken = 1
let ikinciDegisken = 2

console.log(ikinciDegisken)

const sabitDegisken = 5
console.log(sabitDegisken)

// Verileri aynı yerde tutmak için Array'lerden yararlanıyoruz.
//camelCasing - ilk harf küçük 2.kelimenin ilk harf büyük
// PascalCasing

let degerler = ["ilkDeger", 8, "ucuncuDeger",12]

console.log("<ul>")

for (let i=0; i<degerler.length; i++){
 console.log("<li>"+degerler[i]+"</li>")
}

console.log("</ul>")