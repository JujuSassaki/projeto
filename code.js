document.addEventListener("DOMContentLoaded", function () {

    const botao = document.querySelector(".btnP");
    const output = document.querySelector(".output");
    
    botao.addEventListener("click", function () {
        output.textContent = "O último dia fácil foi ontem!";
    });
});