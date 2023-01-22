console.log('Mostrar o Document',document);


const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer .addEventListener("click", () => {
    console.log("clicou no botao veja o trailer");

    modal.classList.add("aberto");
    video.setAttribute("src",linkvideo);
    
});

const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal",modal);

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src","");
});

const video = document.getElementById("video");
const linkvideo = video.src;
