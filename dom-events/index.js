/*evants?
    Evnets pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM.
    Kejadian tersebut bisa di lakuakan oleh user seperti: mouse event,  keyboard event,  dll.
    Ataupun dilakukan secara  otomatis  oleh API seperti: animasi  selesai dijalankan, halaman selesai di load, dll */


/* Cara penerapan event atau 'mendengarkan' event
    - event handler
        -inline HTML attribute
        -element method
    - addEventListener() */


/* daftar event
    - mouse event
       - click => ketika mouse di klik kiri
       - dblclick => ketika mouse double klik kiri
       - mouseover
       - mouseenter => kerika cursor masuk
       - mouseleave => ketika cursor keluar
       - mouseup
       - wheel
    - resources event
    - keyboard event
        - keydown
        - keypress
        - keyup
    - focus event
    - CSS Animation dan Transition event
    - form event
        - reset
        - submit
    - view event
        - resize
        - scroll
    - drag and drop  event
    - dll
     */

// merubah warna background paragraf3 ketika di clik menjadi warna hijau dengan menggunakan event handler inline HTML attribute
const p444 = document.querySelector('.p3')  // cara ini tidak di sarankan

function ubahWarna(){
    p444.style.backgroundColor = 'green'
}


// merubah warna background paragraf2 ketika di Click menjadi warna skyblue dengan menggunakan event handler element method
const p2 = document.querySelector('.p2')

function uabhWarnaP2() {
    p2.style.backgroundColor = 'skyblue'
}
p2.click = uabhWarnaP2




// merubah warna background paragraf4 ketika di doubleclik menjadi warna yellow dengan menggunakan addEventListener()
const p4 = document.querySelector('section#b p')

p4.addEventListener('dblclick', () => {
    p4.style.backgroundColor = 'yellow'
})


// menambahkan element li item4 ketika user click paragraf4 dengan menggunakan addEventListener()
const p4Baru = document.querySelector('section#b p')

p4.addEventListener('click', () => {
    const parent  = document.querySelector('section#b ul')
    const li = document.createElement('li')
    const textLI = document.createTextNode('item4')

    li.appendChild(textLI)
    parent.appendChild(li)
})