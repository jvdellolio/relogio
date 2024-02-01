function carregar() {
    var msg = window.document.getElementById('msg');
    var img = document.getElementById('foto').getElementsByTagName('img')[0]; // Corrigido para obter a imagem correta
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22

    msg.innerHTML = `agora são ${hora} horas`;

    if (hora >= 0 && hora <= 12) {
        // bom dia
        img.src = 'manhâ.jpg';
        document.body.style.background = 'cornflowerblue';
    } else if (hora > 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde.jpg';
        document.body.style.background = 'wheat';
    } else {
        // boa noite
        img.src = 'noite.jpg';
        document.body.style.background = 'rgb(21, 21, 77)';
    }
}