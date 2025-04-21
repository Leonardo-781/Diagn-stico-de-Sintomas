const imagens = [
    "img/img1.jpeg",
    "img/img2.jpeg",
    "img/img3.jpeg",
    "img/img4.jpeg",
    "img/img5.jpeg"
];

function diagnosticar() {
    let sintomas = document.getElementById("sintomas").value.trim();
    
    if (sintomas.length === 0) {
        alert("Por favor, insira seus sintomas!");
        return;
    }

    document.getElementById("resultado").innerHTML = "<strong>Diagnóstico:</strong> É câncer.";
    

    let imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
    let imgElement = document.getElementById("imagem");
    imgElement.src = imagemAleatoria;
    imgElement.style.display = "block";

    setTimeout(() => {
        location.reload();
    }, 5000);
}

function reiniciar() {
    document.getElementById("sintomas").value = "";
    document.getElementById("resultado").innerHTML = "";
    let imgElement = document.getElementById("imagem");
    imgElement.style.display = "none";
}
