// const judul = document.getElementById('judul')
// judul.innerHTML   = "hendryprasetyo"
// judul.style.color = 'salmon'
// judul.style.backgroundColor = 'skyblue'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'hello world'




// const judul =  document.querySelector('#judul')
// judul.style.color = 'black'

//menambahkan atribute
// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('class', 'judul')


// const a = document.querySelector('section#a a')
// a.setAttribute('id', 'section')

// //method classList
// const pw2 = document.querySelector('.p2')
// pw2.classList.add('label') // untuk menambahkan classtanpa mengganti/menimpa class yang sudah ada
// pw2.classList.remove('label') // untuk menghapus class yang ada
// pw2.classList.toggle('label') // untuk mengecek apakah classs yang mau di tambahkan dalam case kali ini class nya label sudah ada atau belum. jika classs label blm ada maka akan di tambahkan, namun jika sudah ada akan di hapus
// pw2.classList.item(2) // untuk mengetahui isi class dengan no urut dari 0
// pw2.classList.contains('label') // untuk menanyakan class dalam kasus ini class label, jika ada akan di kembalikan dengan true jika tidak ada akan flase 
// pw2.classList.replace('label','babel') // untuk menguubah nama class





// // MANIPULASI NODE
//     //document.createElement()
//     //document.createTextNode()
//     //appendChild()
//     //insertBefore()
//     //parentNode.removeChild()
//     //parentNode.replaceChild()


// // contoh  1    
// // membuat element beserta isi yang  mau dimasukan kedalam element
// const liBaru = document.createElement('li')
// const textLiBaru = document.createTextNode('item 4')

// // memasukan isi  dari  element yang sudah kita buat kedalam ement yang sudah kita buat
// liBaru.appendChild(textLiBaru) //penggunaan appendChild untuk memasukan isi dari element ke akhir 

// // memasukan element pada posisi yang kita inginkan di html
// const li = document.querySelector('#b ul')

// li.appendChild(liBaru)

// // contoh 2
// const divBaru = document.createElement('div')
// const isiDiv = document.createElement('p')
// const textP  = document.createTextNode('cie contoh  2')

// divBaru.appendChild(isiDiv)
// isiDiv.appendChild(textP)

// const sectionNew = document.getElementById('container')

// sectionNew.appendChild(divBaru)




// // contoh 1 penggunaan insertBefore. manambahkan element li ke posisi 3
// const liTiga = document.createElement('li')
// const textLiTiga = document.createTextNode('Item 3 dari DOM manipulasi')

// liTiga.appendChild(textLiTiga)

// const liParent = document.querySelector('#b ul') // select parent dari  element yang mau kita tambahkan
// const liPosition = liParent.querySelector('li:nth-child(3)') // pilih posisi dari element yang mau kita tambahkan dengan sudoclass

// liParent.insertBefore(liTiga, liPosition) // insertBefore memiliki dua  parameter yang harus di masukan, yaitu elemnet yang sudah kita buat pada parameter pertama dan variable posisi yang kita inginkan pada parameter ke dua



//contoh penggunaan removeChild()
const sectionB = document.querySelector('section#b ul')
const link = document.getElementsByTagName('li')[0]

sectionB.removeChild(link)



// contoh penggunaa replaceChild()
const sectionBaru = document.getElementById('b')
const p4 = sectionBaru.querySelector('p')

const p4Baru = document.createElement('h2')
const textP4Baru = document.createTextNode('ini p4 baru')

p4Baru.appendChild(textP4Baru)

sectionBaru.replaceChild(p4Baru, p4)
