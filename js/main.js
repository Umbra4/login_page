const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function (){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showBtn.textContent = "Ocultar";
        //showBtn.style.color = "#ff5a00";
        showBtn.style.color = "#222";
    }else{
        pass_field.type = "password";
        showBtn.textContent = "Mostrar";
        showBtn.style.color =  "#222";
    }
});