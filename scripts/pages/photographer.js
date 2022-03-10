async function getPhotographer() {

   let response = await fetch('/FishEye_code/data/photographers.json');
   let json;

   if (response.ok) { 
      json = await response.json();
   } else {
      alert("HTTP-Error: " + response.status);
   }
   
   return {
      photographers: [...json.photographers],
      media: [...json.media] //or ...json.photographers (for file) ?
   }

}

//display photographer data
async function displayPhotographerDetails(photographers) {

   //récupère sections html pour y injecter le contenu
   const photographerSection = document.querySelector('.photographer-section');
   const priceCell = document.querySelector('.price-cell');

   //pour chacun, récupère factory et injecte les data
   photographers.forEach((photographer) => {
      //pour 'photographer-header'
      const photographerModel = photographerFactory(photographer);
      const photographerDetails = photographerModel.photographerDetails();
      photographerSection.appendChild(photographerDetails);
      const photographerPortait = photographerModel.photographerPortait();
      photographerSection.appendChild(photographerPortait);
      //pour price/likes cell
      const photographerPrice = photographerModel.photographerPrice();
      priceCell.appendChild(photographerPrice);
   })

}


//get right ID to display right photographer
async function getPhotographerID() {

   //get id in url
   let urlParams = (new URL(document.location)).searchParams;
   let urlId = urlParams.get('id');
   console.log(urlId);

   //need to get ID in photographer data
   const photographerModel = photographerFactory();
   const photographerId = photographerModel.photographerId();

   //compare id in url to data
   if (urlId === photographerId) {
      //display photographer
   }
}

getPhotographerID();

async function init() {
   // Récupère les datas des photographes
   const { photographer } = await getPhotographer();
   displayPhotographerDetails(photographer);
};
    
init();