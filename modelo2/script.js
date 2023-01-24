function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else  {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
              img.setAttribute('src','img-crianca2-m.jpg')
            }else if(idade < 21) {
                img.setAttribute('src','img-jovem2-m.jpg')
            }else if(idade < 50) {
                img.setAttribute('src','img-adulto2-m.jpg')
            }else {
                img.setAttribute('src','img-idoso2-m.jpg')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img-crianca2-f.jpg')
            }else if(idade < 21) {
                img.setAttribute('src','img-jovem2-f.jpg')
            }else if(idade < 50) {
                img.setAttribute('src','img-adulto2-f.jpg')
            }else {
                img.setAttribute('src','img-idoso2-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}
      
 
