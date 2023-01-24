
function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText `Agora são ${hora} horas`

    if(hora >= 0 &&  hora < 12) {
        img.src = 'img-noite2.png'
    }else if(hora >= 12 && hora < 18) {
        img.src = 'img-tarde3.png'
    }else {
        img.src = 'img-noite2.png'
    }
 
}
