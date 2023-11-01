// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const botao = document.getElementById("input");
const blocosenha = document.getElementById("output");

botao.addEventListener("click", () => { gerarsenha() } );


function gerarsenha() 
{
    alert("eae");
    
    return;
    
    const caracteres_especiais = "_=-/\'!@#$%¨&*(){}^?:><";
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "1234567890";
    let novasenha = "";

    const tamanhosenha = document.getElementById("tamanho").value;
    
    while (novasenha.length < tamanhosenha) 
    {
        let numero = Math.random() * 100;
        
        switch (numero)
        {
            case numero < 33:
                novasenha = novasenha + letras[Math.floor(Math.random() * letras.length)];
                break;
                
            case numero >= 33 && numero <= 66:
                novasenha = novasenha + caracteres_especiais[Math.floor(Math.random() * caracteres_especiais.length)];
                break;
                
            case numero > 66:
                novasenha = novasenha + numeros[Math.floor(Math.random() * numeros.length)];
                break;
        }
    }
    
    
    blocosenha.innerHTML = novasenha;
    
}
