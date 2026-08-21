let btn_teste = document.getElementById("teste")

btn_teste.addEventListener("click", () => {
btn_teste.innerHTML = "Cique aqui Fedorento"
btn_teste.style.backgroundColor = "Black"
})

let jumbo = document.querySelector('#jumbo')

btn_teste.addEventListener("click", () =>{

})

let header = document.querySelector('header')

btn_teste.addEventListener("click", ()=>{
    header.style.display = "none"
})

btn_teste.addEventListener("click", () =>{
    if(controle == false){
        header.style.display = "none"
        controle = true
    } else{
        header.style.display = "flex"
        controle = false
    }
})

let cards = document.getElementsByClassName('card')

for (const item of cards) {
    item.addEventListener("mouseover", ()=>{
        item.style.backgroundColor = "red"
    })
    item.addEventListener("mouseout", ()=>{
        item.style.backgroundColor = "black"
    })
}
