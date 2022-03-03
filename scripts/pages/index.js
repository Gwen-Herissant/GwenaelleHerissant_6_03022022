    async function getPhotographers() {

        let response = await fetch('/FishEye_code/data/photographers.json');
        let json;

        if (response.ok) { 
            json = await response.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }
        
        return {photographers: [...json.photographers]}
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    