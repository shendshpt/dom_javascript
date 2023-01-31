// DOM SELECTION:
    // document.getElementById()
    // document.getElementsByTagName()
    // document.getElementsByClassName()
    // document.querySelector()
    // document.querySelectorAll()

// HTMLCollection adalah kumpulan dari element-element

// document.getElementById() yang akan di kembalikan adalah element
const judul = document.getElementById('judul') // method ini untuk sellect element yang memiliki id
judul.style.color = 'red' // pilih object, lalu method style untuk merubah css, lalu syntax css apa yang ingin di ubah
judul.style.backgroundColor = '#ccc' // untuk syntax css yang menggunakan - , maka lakukanlah cara seperti di samping
judul.innerHTML = 'hendry' // innerHTML digunakan untuk merubah text 




// document.getElementsByTagName() yang akan di kembalikan adalah HTMLColllection
const p = document.getElementsByTagName('p') // method ini akan seperti tipe data array
p[0].style.backgroundColor =  'lightblue' // berbeda dengan getElementById, untuk merubah css dari syntax getElementsByTagName haru meanambahkan index array nya []

// jika ingin mengubah css semua index bisa menggunakan looping
for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor =  'lightblue' 
} 
    
// jika ingin mengubah css pada HTMLCollection yang jumlah element-nya hanya satu, bisa lakukan cara ini 
const h1 = document.getElementsByTagName('h1')[0]  //hanya cukup menambahkan index array nya di akhir method
h1.style.fontSize = '50px' // dan bisa melakukan perubahan css seperti getElementById()




// document.getElementsByClassName() yang akan di kembalikan adalah HTMLColllection
const p1 = document.getElementsByClassName('p1') // method ini  untuk merubah css seperti getElementsByTagName() yaitu menggunakan index array nya
p1[0].innerHTML = 'ini dirubah dari javascript'




// document.querySelector() yang akan di kembalikan adalah element
const p4 = document.querySelector('#b p') // method ini sama seperti  kita sellect element di css yang sellector nya spesifik
p4.style.color = 'green'

// jika ingin mengubah li ke-2 dari ul yang ada di dalam selecton element maka lakukan ini
const li2  = document.querySelector('section#b ul li:nth-child(2)') // select-nya menggunakan sudo class
li2.style.backgroundColor = 'orange'




// document.querySelectorAll() yang akan dikembalikan adalah node-list
const p = document.querySelectorAll('p') // method ini sama seperti getElementsByTagName yang mengembalikan HTMLCollection

// menggunakan looping
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'black'
}




// kesimpulan
    // jika element yang ada di html memiliki id, makagunakan getElementById()
    // jika element yang ada di html memiliki class, maka gunakan getElementsByClassName()
    // jika diharuskan untuk tidak merubah struktur html, entah itu menambahkan id ataupun class, maka gunakan querySelector() ataupun querySelectorAll()
    // jika  dari sisi performens method yang  paling cepat adalah getElementById() dan getElementsByTagName()