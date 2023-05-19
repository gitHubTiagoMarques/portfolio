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
        recognition.lang = 'pt-PT';

        recognition.interimResults = true;

        const recordingImg = document.getElementsByClassName("voice")[0];
        recordingImg.classList.add("recording");

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            document.getElementById("input").value = transcript;
            console.log(transcript);
        });

        recognition.addEventListener('end', () => {
            recordingImg.classList.remove("recording");
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
        case "comandos":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>.comandos{<br><br><strong>Perfil</strong> : aprende mais sobre mim<br><strong>Skills</strong> : as minhas qualificações<br><strong>Projetos</strong> : projetos que desenvolvi<br><strong>Currículo</strong> : acesso ao meu currículo<br><strong>Contacto</strong> : como me contactar<br><br>}</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = '.comandos{...';
            break;
        case "perfil":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>.perfil{<br><br><strong>Perfil</strong> : aprende mais sobre mim<br><strong>Skills</strong> : as minhas qualificações<br><strong>Projetos</strong> : projetos que desenvolvi<br><strong>Currículo</strong> : acesso ao meu currículo<br><strong>Contacto</strong> : como me contactar<br><br>}</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = '.perfil{...';
            break;
        case "skills":
            break;
        case "projetos":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>.projetos{<br><br><strong>Koru</strong> : aplicação multi-plataforma que foca na dinâmica de votação em eventos e permite a organizadores criarem e gerirem os eventos via web e aos participantes votarem em projetos exibidos no evento via aplicação mobile.<br><br><strong>Officium</strong> : uma aplicação que tem como objetivo trazer mão-de-obra jovem para Portugal, principalmente para as zonas rurais, com foco na área da tecnologia.<br><br><strong>Trashseeker</strong> : um jogo online que tem como objetivo sensibilizar as gerações mais novas para as alterações climáticas. Foi desenvolvido após a minha primeira interacção com javascript e é um teste a algumas das técnicas aprendidas.<br><br><strong>Zetflicks</strong> : consiste num site responsivo onde o utilizador pode encontrar novos filmes e series, ver alguns detalhes sobre eles e adicioná-los à sua Watchlist.<br><br>}<br><br>Envia uma mensagem com o nome do projeto para mais detalhes!</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = '.projetos{...';
            break;
        case "koru":
            let img1 = new Image();
            img1.onload = function() {
                chat.scrollTop = chat.scrollHeight;
            };
            img1.src = "assets/koru_visual.j+g";
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><strong>Koru</strong> - 2023<br><br>Principal tecnologia: <i>React.js & React Native</i><br><br>Descrição: <br><br>Koru é uma aplicação multi-plataforma que foca na dinâmica de votação em eventos. Esta permite aos organizadores criarem e gerirem os eventos via web e aos participantes votarem em projetos exibidos no evento via aplicação mobile..<br><br>Visual:<br><br><img class="visualImg" style="object-fit: cover" src="assets/koru_visual.JPG"><br><br>Em desenvolvimento...</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = 'Koru...';
            break;
        case "officium":
            let img2 = new Image();
            img2.onload = function() {
                chat.scrollTop = chat.scrollHeight;
            };
            img2.src = "assets/officium_visual.JPG";
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><strong>Officium</strong> - 2022<br><br>Principal tecnologia: <i>React.js</i><br><br>Descrição: <br><br>Visual:<br><br><img class="visualImg" src="assets/officium_visual.JPG"><br><br>Explora a demo <a href="https://githubtiagomarques.github.io/officium/" target="_blank">aqui</a></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            break;
        case "trashseeker":
            let img3 = new Image();
            img3.onload = function() {
                chat.scrollTop = chat.scrollHeight;
            };
            img3.src = "assets/trashseeker_visual.jpg";
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><strong>Trashseeker</strong> - 2021<br><br>Principal tecnologia: <i>Javascript</i><br><br>Descrição: <br><br>Visual:<br><br><img class="visualImg" src="assets/trashseeker_visual.JPG"><br><br>Explora a demo <a href="https://githubtiagomarques.github.io/trashseeker/" target="_blank">aqui</a></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            break;
        case "zetflicks":
            let img4 = new Image();
            img4.onload = function() {
                chat.scrollTop = chat.scrollHeight;
            };
            img4.src = "assets/zetflicks_visual.jpg";
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span><strong>Zetflicks</strong> - 2023<br><br>Principal tecnologia - <i>React.js</i><br><br>Descrição: <br><br>Zetflicks é um pequeno projeto desenvolvido por 3 estudantes universitários da Universidade de Aveiro com o objetivo de se tornarem mais experientes em novas linguagens de programação e uso de API. O projeto consiste num site responsivo onde o utilizador pode encontrar novos filmes e series, ver alguns detalhes sobre eles e adicioná-los à sua Watchlist.<br><br>Visual:<br><br><img class="visualImg" src="assets/zetflicks_visual.JPG"><br><br>Explora a demo <a href="https://githubtiagomarques.github.io/trashseeker/" target="_blank">aqui</a></span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            break;
        case "curriculo":
        case "currículo":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>.currículo{<br><br>Abrir num novo separador : <a><u onclick="openPDF()" style="cursor:pointer"><strong>abrir</strong></u></a><br>Fazer download : <a style="text-decoration: none" href="assets/cv.pdf" download><u><strong>download</strong></u></a><br><br>}</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = 'Lista de comandos:...';
            break;
        case "contato":
        case "contacto":
            chat.innerHTML += '<div class="message user_message">\n' + '<p><span>.contacto{<br><br><strong>Email</strong> : <a href="mailto:al.tiagosoares@gmail.com">al.tiagosoares@gmail.com</a><br><br><strong>Telemóvel</strong> : <a href="tel:+351914042276">+351 914042276</a><br><br><strong>LinkedIn</strong> : <a href="https://www.linkedin.com/in/tiago-marques-506124180/" target="_blank">tiago-marques</a><br><br><strong>Github</strong> : <a href="https://github.com/gitHubTiagoMarques" target="_blank">GitHubTiagoMarques</a><br><br>}</span><span class="hour">'+ horas.substring(0,5) + '</span></p>\n' + '</div>';
            document.getElementById("notification").innerText = '.contacto{...';
            break;
    }
    chat.scrollTop = chat.scrollHeight;


}

function chatClick (){
    document.getElementsByClassName("front")[0].style.display = "none";
    document.getElementsByClassName("notification")[0].style.display = "none";
    document.getElementsByClassName("block")[0].classList.add("active");
}


function myFunction(event) {
    event.stopPropagation();
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
};

function openPDF() {
    window.open('assets/cv.pdf', '_blank');
}


window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var loadingBar = document.getElementById('loading-bar');
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 60) {
            clearInterval(interval);
            loadingScreen.style.opacity = 0;
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 1000);
        }
        width += 1;
        loadingBar.style.width = width + '%';
    }, 30);
});