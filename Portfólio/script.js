window.onload = (event) =>
{
    // Mensagem para o usuário
    let Alert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(Alert)
    
    bsAlert.show();

    // Diminuindo o zoom do usuário
    document.body.onresize = function() 
    {
        if (document.body.clientWidth > 425 && document.body.clientWidth <= 1024) 
        {
            console.log("Small")
            document.body.style.zoom = "80%";
        }
    };

}

function mouse() 
{
    // Animação onscroll

    if (window.scrollY > 550 && window.scrollY < 1700)
    {
        document.getElementById("c").style.animationName = "barra1";
        document.getElementById("js").style.animationName = "barra2";
        document.getElementById("mysql").style.animationName = "barra3";
        document.getElementById("redes").style.animationName = "barra4";
        document.getElementById("logica").style.animationName = "barra5";
        document.getElementById("online").style.animationName = "barra6";
        document.getElementById("empatia").style.animationName = "barra7";
        document.getElementById("equipe").style.animationName = "barra8";
        document.getElementById("comunicacao").style.animationName = "barra9";
        document.getElementById("planejamento").style.animationName = "barra10";
        document.getElementById("responsabilidade").style.animationName = "barra11";
        document.getElementById("disciplina").style.animationName = "barra12";
    } 
    else 
    { 
        document.getElementById("c").style.animationName = "barra13"; 
        document.getElementById("js").style.animationName = "barra14";
        document.getElementById("mysql").style.animationName = "barra15";
        document.getElementById("redes").style.animationName = "barra16";
        document.getElementById("logica").style.animationName = "barra17";
        document.getElementById("online").style.animationName = "barra18";
        document.getElementById("empatia").style.animationName = "barra19";
        document.getElementById("equipe").style.animationName = "barra20";
        document.getElementById("comunicacao").style.animationName = "barra21";
        document.getElementById("planejamento").style.animationName = "barra22";
        document.getElementById("responsabilidade").style.animationName = "barra23";
        document.getElementById("disciplina").style.animationName = "barra24";
    }
}
window.addEventListener("scroll", mouse);



function none() {
    formacao = document.getElementsByClassName("circles") [0].style.display = "none";
    formacao = document.getElementsByClassName("circles2") [0].style.display = "none";

    formacao = document.getElementsByClassName("formacao") [0].style.color = "#12253B";
    formacao = document.getElementsByClassName("formacao") [1].style.color = "#12253B";

    experiencia = document.getElementById("experiencia2").style.color = "#3877BA";
    experiencia = document.getElementsByClassName("fa-briefcase") [0].style.color = "#3877BA";

    experiencia = document.getElementsByClassName("circles3") [0].style.display = "flex";
    experiencia = document.getElementsByClassName("circles4") [0].style.display = "flex";
}

function block() {
    formacao = document.getElementsByClassName("circles") [0].style.display = "flex";
    formacao = document.getElementsByClassName("circles2") [0].style.display = "flex";

    formacao = document.getElementsByClassName("formacao") [0].style.color = "#3877BA";
    formacao = document.getElementsByClassName("formacao") [1].style.color = "#3877BA";

    experiencia = document.getElementById("experiencia2").style.color = "#12253B";
    experiencia = document.getElementsByClassName("fa-briefcase") [0].style.color = "#12253B";

    experiencia = document.getElementsByClassName("circles3") [0].style.display = "none";
    experiencia = document.getElementsByClassName("circles4") [0].style.display = "none";
}

function mascara() {
    var telefone = document.getElementById("celular").value;
    telefone = telefone.slice(0,16);
    document.getElementById("celular").value = telefone;
    
    var telMask = document.getElementById("celular").value;
    if (telMask[0] != "(") 
    {
        if (telMask[0] != undefined)
        {
            document.getElementById("celular").value = "(" + telMask[0];
        }
    }

    if (telMask[3] != ")") 
    {
        if (telMask[3] != undefined)
        {
            document.getElementById("celular").value = telMask.slice(0,3) + ")" + telMask[3];
        }
    }

    if (telMask[4] != " ") 
    {
        if (telMask[4] != undefined)
        {
            document.getElementById("celular").value = telMask.slice(0,4) + " " + telMask[4];
        }
    }

    if (telMask[5] != "9") 
    {
        if (telMask[5] != undefined)
        {
            document.getElementById("celular").value = telMask.slice(0,5) + "9" + telMask[5];
        }
    }

    if (telMask[6] != " ") 
    {
        if (telMask[6] != undefined)
        {
            document.getElementById("celular").value = telMask.slice(0,6) + " " + telMask[6];
        }
    }

    if (telMask[11] != "-") 
    {
        if (telMask[11] != undefined)
        {
            document.getElementById("celular").value = telMask.slice(0,11) + "-" + telMask[11];
        }
    }
}

function color1()
{
    document.getElementById("home").style.color = "#8EB9E5";
    document.getElementById("about").style.color = "#12253B";
    document.getElementById("portfolio").style.color = "#12253B";
    document.getElementById("contato").style.color = "#12253B";
}

function color2()
{
    document.getElementById("about").style.color = "#8EB9E5";
    document.getElementById("home").style.color = "#12253B";
    document.getElementById("portfolio").style.color = "#12253B";
    document.getElementById("contato").style.color = "#12253B";
}

function color3()
{
    document.getElementById("portfolio").style.color = "#8EB9E5";
    document.getElementById("about").style.color = "#12253B";
    document.getElementById("home").style.color = "#12253B";
    document.getElementById("contato").style.color = "#12253B";
    
}

function color4()
{
    document.getElementById("contato").style.color = "#8EB9E5";
    document.getElementById("portfolio").style.color = "#12253B";
    document.getElementById("about").style.color = "#12253B";
    document.getElementById("home").style.color = "#12253B";
}

function page() 
{
    let airplane = document.querySelector("#white");
    airplane.addEventListener("click", function()
    {
        window.open("https://lucasena.netlify.app");
    });
    
    let btnCode1 = document.querySelector("#btn1");
    btnCode1.addEventListener("click", function()
    {
        window.open("https://github.com/LucasMeloSena/Portfolio");
    });

    
}