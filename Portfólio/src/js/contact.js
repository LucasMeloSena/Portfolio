window.onload = (event) => 
{
    // diminuindo o zoom do usuário
    document.body.onresize = function() 
    {
        if (document.body.clientWidth > 425 && document.body.clientWidth <= 1024) 
        {
            console.log("Small")
            document.body.style.zoom = "80%";
        }
    };

    // adicionando placeholders no input
    document.getElementById("nome").placeholder = "John Doe Silva";
    document.getElementById("email").placeholder = "johndoe@example.com";
    document.getElementById("celular").placeholder = "(31) 9 0000-0000";
}