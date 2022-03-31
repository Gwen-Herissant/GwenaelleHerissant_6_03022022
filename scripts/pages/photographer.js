async function getPhotographer(id) {

   let response = await fetch('/FishEye_code/data/photographers.json');
   let json;

   if (response.ok) { 
      json = await response.json();
   } else {
      alert("HTTP-Error: " + response.status);
   }

   let photographerInfos = json.photographers.find(item => item.id == id);
   
   let photographerID = json.media.filter(item => item.photographerId == id);

   return {
      photographer: photographerInfos,
      media: photographerID
   }

}

async function displayPhotographerDetails(photographer) {

   const photographerSection = document.querySelector('.photograph-header');
   const priceCell = document.querySelector('.price-cell');

      const photographerModel = photographerFactory(photographer);
      const photographerDetails = photographerModel.photographerDetails();
      photographerSection.appendChild(photographerDetails);
      const photographerPortait = photographerModel.photographerPortait();
      photographerSection.appendChild(photographerPortait);      const photographerPrice = photographerModel.photographerPrice();
      priceCell.appendChild(photographerPrice);

};


async function displayMedias(media) {
   const mediaSection = document.querySelector('.media-grid');

   media.forEach((media) => {
      const mediaModel = newMediaCard(media);
      const mediaCard = mediaModel.mediaCard();
      
      mediaSection.appendChild(mediaCard);
   });

};


async function init() {
   const urlParams = (new URL(document.location)).searchParams;
   const id = urlParams.get('id');

   const { photographer, media } = await getPhotographer(id);
   displayPhotographerDetails(photographer);
   displayMedias(media);
};

init();

