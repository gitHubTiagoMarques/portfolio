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
        recognition.lang = 'en-US, pt-PT';

        recognition.interimResults = true;

        const recordingImg = document.getElementById("click_to_record");
        recordingImg.src = "assets/recording.svg";

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            document.getElementById("input").value = transcript;
            console.log(transcript);
        });

        recognition.addEventListener('end', () => {
            recordingImg.src = "assets/voice.svg";
            newmsg();
        });

        recognition.start();
    });
});

var chat;



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
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>Projetos:<br><br><strong>Officium</strong><br><strong>Trashseeker</strong></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
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