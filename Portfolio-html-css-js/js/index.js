
const galeria = document.querySelectorAll('.container--img img');
const galeriaContainer = document.querySelector('.container--img');

function trocaImagem(event) {
   const img = event.currentTarget;

   const media = matchMedia("(min-width: 800px)").matches;
   if(media) {
      galeriaContainer.prepend(img);
   }
   
}

function eventosGaleria(img){
   img.addEventListener('click', trocaImagem)
}
galeria.forEach(eventosGaleria);