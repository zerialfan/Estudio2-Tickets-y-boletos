class DataUser{
    constructor(name,source,destination,time,seat){
        this.name = name
        this.source = source
        this.destination = destination
        this.time = time
        this.seat = seat
    }
}
class IU{
    pushTiket(obj){
        let {name,source,destination,time,seat} = obj
        const d = document
        const $template = d.getElementById("template").content
        const $containerTiket = d.querySelector(".container")
        const $fragmento = d.createDocumentFragment()
        $template.querySelector(".name").textContent = name
        $template.querySelector(".source").textContent = source
        $template.querySelector(".destination").textContent = destination
        $template.querySelector(".time").textContent = time
        $template.querySelector(".seat").textContent = seat
        const $clon = d.importNode($template,true)
        $fragmento.append($clon)
        $containerTiket.append($fragmento)
    }
    resetForm(){
        document.querySelector(".container-input").reset()
    }
}
let arr = []
let  limitSeat = 5
function capturar(item) {
    if (arr.length === limitSeat ) {
        const d = document
        const div = d.createElement("div")
        const h2 = d.createElement("h2").textContent = `lo sentimos ya se agotaron los asientos 🥺 `
        const $refe = d.querySelector(".button")
        div.append(h2)
        div.className = `alert`
        $refe.insertAdjacentElement("afterend",div)
        $refe.setAttribute("disabled","")
    } else {
        arr.push(1)
        return arr.length
    }
}
const d = document
d.addEventListener("submit",(e)=>{
    const name = e.path[0][0].value
    const source = e.path[0][1].value
    const destination = e.path[0][2].value
    const time = e.path[0][3].value
    const seat = capturar()
    const data = new DataUser(name,source,destination,time,seat)
    const iu = new IU()
    iu.pushTiket(data)
    iu.resetForm()
    e.preventDefault()
})