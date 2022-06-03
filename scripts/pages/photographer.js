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
   sortByLikes(photographerMedias);

   return {
      photographer: photographerInfos,
      media: photographerMedias
   }

}


/**
 * display photographer header (details)
 */

async function displayPhotographerDetails(data) {

   const photographerSection = document.querySelector('.photograph-header');
   photographerSection.innerHTML = `
   <div class="photographer-details" aria-label="Détails du photographe">
      <h1 class="photographer-details__name">${data.name}</h1>
      <p class="photographer-details__location">${data.city}, ${data.country}</p>
      <p class="photographer-details__tagline">${data.tagline}</p>
    </div>
    <button class="contact_button" role="button" onclick="displayModal()">Contactez-moi</button>
    <img src="assets/photographers/${data.portrait}" alt="${data.name}">
   `

   const priceCell = document.querySelector('.price-cell__price');
   priceCell.textContent = data.price + '€ / jour';

}


/**
 * display media with media cards created in photographer-media factory
 * add media likes to get total
 * lightbox initialization
 */

const likesCell = document.querySelector('.price-cell__likes');
let likesSum = 0;

async function displayMedias(media) {
   const mediaSection = document.querySelector('.media-grid');

   media.forEach((media) => {
      const mediaModel = galleryFactory(media);
      const mediaCard = mediaModel.mediaCard();
      mediaSection.append(mediaCard);

      likesSum += media.likes;
   });

   likesCell.textContent = likesSum;

   Lightbox.lightboxInit();
};


/**
* Functions related to data filtering with dropdown menu
*/

async function removeMediaDisplay(){
   const mediaSection = document.querySelector('.media-grid');
   mediaSection.innerHTML = '';
}

async function sortByLikes(media) {
   let sortByLikes = media.sort((a,b) => (a.likes > b.likes) ? -1 : ((b.likes > a.likes) ? 1 : 0));
   displayMedias(sortByLikes);
}

async function sortByDates(media) {
   let sortByDates = media.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));
   displayMedias(sortByDates);
}

async function sortByTitles(media) {
   let sortByTitles = media.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
   displayMedias(sortByTitles);
}

async function displayMediasByData(media) {

   const sortByDropDown = document.querySelector('#order-by');

   sortByDropDown.addEventListener('change', (e) => {
      if (sortByDropDown.value === 'popularity') {
         likesSum = 0;
         removeMediaDisplay();
         sortByLikes(media);
      } else if (sortByDropDown.value === 'date') {
         likesSum = 0;
         removeMediaDisplay();
         sortByDates(media);
      } else if (sortByDropDown.value === 'title') {
         likesSum = 0;
         removeMediaDisplay();
         sortByTitles(media);
      };
   });

}


/**
* Initialize everything
*/

async function init() {
   const urlParams = (new URL(document.location)).searchParams;
   const id = urlParams.get('id');

   const { photographer, media } = await getPhotographer(id);
   displayPhotographerDetails(photographer);
   displayMediasByData(media);
};

init();

