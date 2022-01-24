opciok = [
    "többet edzem",
    "egészségesen étkezem",
    "több én-időm lesz",
    "bakancslistámból teljesítem pár elképzelésemet",
    "többet pihenek",
    "tanulok valami újat",
    "új hobbiba kezdek",
    "többet olvasok",
    "nem halogatok"
]


function inicializalas() {
    let select = document.getElementById("fogadalom")
    for(fogadalom of opciok){
        select.innerHTML += `<option value="${fogadalom}">${fogadalom}</option>`
    }
}

function eredmeny () {
    let nev = (document.getElementById("nev").value)
    let fogadalom = (document.getElementById("fogadalom").value)
    document.getElementById("eredmeny").innerHTML += "<li>" + fogadalom +' '+ nev +"</li>"
    document.getElementById("nev").value=""
    document.getElementById("fogadalom").value=""
}
