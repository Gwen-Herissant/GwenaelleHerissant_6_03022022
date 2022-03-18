async function getPhotographer(id) {

   let response = await fetch('/FishEye_code/data/photographers.json');
   let json;

   if (response.ok) { 
      json = await response.json();
   } else {
      alert("HTTP-Error: " + response.status);
   }

   console.log(id);

   let photographerID = json.photographers.find(item => {return item.id == id});
   console.log(photographerID);
   
   // const photographerID = json.photographers.filter((photographer) => photographer.id === id) [0];
   // console.log(photographerID);

   return {
      photographer: [...json.photographers],
      media: [...json.media] //or ...json.photographers (for file) ?
   }

}

/*
Pour tri des médias => ne display que ceux appartenant au photographer :
- soit utiliser méthode filter (peu pratique si très gros json, mais peu passer ici)
- soit loop for de style
créer un array vide vouer à récupérer les média avec bon photographerID
for avec itération i++;
si photographerID < à celui rechercher : "continue" (passe à loop suivant)
si photographerId === à celui rechercher : ajoute le média à l'array
si photgrapherID > à celui rechercher : return l'array (donc stop l'itération)
(faire attention à si le fait que les photographerID ne soit pas trier par ordre croissant ne poserais pas un souci)
*/




//display photographer details
async function displayPhotographerDetails(photographer) {

   //récupère section html pour y injecter le contenu
   const photographerSection = document.querySelector('.photograph-header');
   const priceCell = document.querySelector('.price-cell');

   //pour chacun, récupère factory et injecte les data
   photographer.forEach((photographer) => {
      //récupère la factory
      const photographerModel = photographerFactory(photographer);
      //photographer details
      const photographerDetails = photographerModel.photographerDetails();
      photographerSection.appendChild(photographerDetails);
      //photographer portrait
      const photographerPortait = photographerModel.photographerPortait();
      photographerSection.appendChild(photographerPortait);
      //photographer price
      const photographerPrice = photographerModel.photographerPrice();
      priceCell.appendChild(photographerPrice);
   })

}


async function init() {
   //get id in url
   const urlParams = (new URL(document.location)).searchParams;
   const id = urlParams.get('id');
   console.log(id);

   // Récupère les datas des photographes
   const { photographer } = await getPhotographer(id);
   displayPhotographerDetails(photographer);
};

init();

