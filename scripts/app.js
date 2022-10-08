let hexList = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let hexColEl = document.querySelector("#hex-color")
let btn = document.querySelector('button')
let bg = document.querySelector('body')

let colList = [
    col1 = document.querySelector('#col1'),
    col2 = document.querySelector('#col2'),
    col3 = document.querySelector('#col3'),
    col4 = document.querySelector('#col4'),
    col5 = document.querySelector('#col5')
]

function getHex() {
    let hexCol = "#"
    for (let i=0; i<6; i++) {
        let n = Math.floor(Math.random()*hexList.length)
        hexCol+=hexList[n]
    }
    return hexCol
}

btn.addEventListener('click', () => {
    let hexCol = getHex()
    bg.style.setProperty('--gen-col', hexCol)
    hexColEl.textContent=hexCol

    for (let i=0; i<5; i++) {
        let c = getHex()
        colList[i].style.background=c
        colList[i].textContent=c
    }
    colList[2].style.background=hexCol
    colList[2].textContent=hexCol
})

function getColor() {
    let hex = this.textContent
    navigator.clipboard.writeText(hex)
}

for (let i=0; i<5; i++) {
    colList[i].addEventListener('click', getColor)
}