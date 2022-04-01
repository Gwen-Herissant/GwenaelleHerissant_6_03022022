async function getPhotographer(id) {

   let response = await fetch('/FishEye_code/data/photographers.json');
   let json;

   if (response.ok) { 
      json = await response.json();
   } else {
      alert("HTTP-Error: " + response.status);
   }

   let photographerInfos = json.photographers.find(item => item.id == id);
   
   let photographerMedias = json.media.filter(item => item.photographerId == id);

   return {
      photographer: photographerInfos,
      media: photographerMedias
   }

}


async function displayPhotographerDetails(data) {

   const photographerSection = document.querySelector('.photograph-header');
   photographerSection.innerHTML = `
      <div class="photographer-details" aria-label="Détails du photographe">
      <h1 class="photographer-details__name">${data.name}</h1>
      <p class="photographer-details__location">${data.city}, ${data.country}</p>
      <p class="photographer-details__tagline">${data.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img src="assets/photographers/${data.portrait}" alt="${data.name}">
   `

   const priceCell = document.querySelector('.price-cell');
   priceCell.innerHTML = `
      <p class="price-cell_price">${data.price}€/jour</p>
   `

}


async function displayMedias(media) {
   const mediaSection = document.querySelector('.media-grid');

   media.forEach((media) => {
      const mediaModel = galleryFactory(media);
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

