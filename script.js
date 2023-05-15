document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    const horas = d.toLocaleString([], {
        timeStyle: 'medium',
        hour12: false,
    })
    document.getElementById("hora").innerText = horas.substring(0,5);
    document.getElementById("time").innerText = horas.substring(0,5);
    var text = document.getElementsByClassName("text")[0];
    function textLoad () {
        setTimeout(() => {
            text.textContent = "Bem-Vindo";
        }, 0);
        setTimeout(() => {
            text.textContent = "Welcome";
        }, 4000);
    }
    textLoad();
    setInterval(textLoad, 8000);

    // add event listener here
    document.getElementById("click_to_record").addEventListener('click', function() {
        window.SpeechRecognition = window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'pt-PT, en-EN';

        recognition.interimResults = true;

        const recordingImg = document.getElementsByClassName("voice")[0];
        recordingImg.setAttribute("fill", "#FF0000");

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            document.getElementById("input").value = transcript;
            console.log(transcript);
        });

        recognition.addEventListener('end', () => {
            recordingImg.setAttribute("fill", "#54656f");
            newmsg();
        });

        recognition.start();
    });

    const sendBtn = document.getElementById('send');
    sendBtn.addEventListener('click', function() {
        sendBtn.style.display = 'none';
        document.getElementById("click_to_record").style.display = "flex";
    });

    const input = document.getElementById('input');
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            document.getElementById("send").style.display = "flex";
            document.getElementById("click_to_record").style.display = "none";
        }
        else {
            document.getElementById("send").style.display = "none";
            document.getElementById("click_to_record").style.display = "flex";
        }
    });


});

var chat = document.getElementById('chat');


const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);

newmsg = () => {
    const d = new Date();
    const horas = d.toLocaleString([], {
        timeStyle: 'medium',
        hour12: false,
    })
    chat = document.getElementById('chat');
    const mensagem = document.getElementById("input");
    event.preventDefault();
    console.log(chat.innerHTML);
    if (mensagem.value.replace(/\s/g, '').length){
        chat.innerHTML += '<div class="message my_message">\n' + '<p><span>' + mensagem.value + '</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
        chat.scrollTop = chat.scrollHeight;
        document.getElementById("notification").innerHTML = '<img class="icon" src="assets/seen.svg">' + mensagem.value;
        let msg = mensagem.value;
        setTimeout(function (){response(msg.toLowerCase())},2000);
    }
    mensagem.value = "";
}

function response(mensagem){
    const d = new Date();
    const horas = d.toLocaleString([], {
        timeStyle: 'medium',
        hour12: false,
    })
    chat = document.getElementById('chat');
    switch (mensagem){
        case "commands":
        case "comandos":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>Lista de comandos:<br><br>"<strong>Perfil</strong>" - Aprende mais sobre mim<br>"<strong>Skills</strong>" - As minhas qualificações<br>"<strong>Projetos</strong>" - Projetos que desenvolvi ou estive envolvido<br>"<strong>Currículo</strong>" - Acesso ao meu currículo<br>"<strong>Contacto</strong>" - Como me contactar</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = 'Lista de comandos:...';
            break;
        case "corno":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><img style="width: 300px" src="assets/corno.jpg"></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            break;
        case "profile":
        case "perfil":

            break;
        case "skills":
            break;
        case "projects":
        case "projetos":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>Projetos:<br><br><strong>Koru</strong> (em desenvolvimento) - aplicação multi-plataforma que foca na dinâmica de votação em eventos e permite a organizadores criarem e gerirem os eventos via web a aos participantes votar em projetos exibidos no evento via aplicaçãp mobile.<br><br><strong>Officium</strong> - uma aplicação que tem como objetivo trazer mão-de-obra jovem para Portugal, principalmente para as zonas rurais, com foco na área da tecnologia.<br><br><strong>Trashseeker</strong> - um jogo online que tem como objetivo sensibilizar as gerações mais novas para as alterações climáticas. Foi desenvolvido após a minha primeira interacção com javascript e é um teste a algumas das técnicas aprendidas.<br><br><strong>Zetflicks</strong> - consiste num site responsivo onde o utilizador pode encontrar novos filmes e series, ver alguns detalhes sobre eles e adicioná-los à sua Watchlist.<br><br>Envia uma mensagem com o nome do projeto para mais detalhes!</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = 'Projetos:...';
            break;
        case "officium":
            document.getElementById("officium").style.display = "flex";
        case "curriculo":
        case "currículo":
            break;
        case "contact":
        case "contacto":
            break;
        case "almoço":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><img style="width: 300px" src="assets/dominoes.png"></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            break;
    }
    chat.scrollTop = chat.scrollHeight;


}

function chatClick (){
    document.getElementsByClassName("front")[0].style.display = "none";
    document.getElementsByClassName("notification")[0].style.display = "none";
    document.getElementsByClassName("block")[0].classList.add("active");
}