function photographerFactory(data) {

    //text details in photographer 'header'
    function photographerDetails() {
        //get html section
        const textSection = document.querySelector('.photographer-details');
        //create h1 for name
        const name = document.createElement('h1');
        name.classList.add('photographer-details__name');
        name.textContent = data.name;
        textSection.appendChild(name);
        //create p for location
        const location = document.createElement('p');
        location.classList.add('photographer-details__location')
        location.textContent = `${data.city}, ${data.country}`;
        textSection.appendChild(location);
        //create p for tagline
        const tagline = document.createElement('p');
        tagline.classList.add('photographer-details__tagline')
        tagline.textContent = data.tagline;
        textSection.appendChild(tagline);

        return (textSection);
    }

    //portait in photographer 'header'
    //const picture = `assets/photographers/${data.portrait}`;

    function photographerPortait() {
        //get html section
        const photographerSection = document.querySelector('.photographer-section');
        //create img
        const img = document.createElement( 'img' );
        img.setAttribute("src", `assets/photographers/${data.portrait}`);
        img.setAttribute('alt', '');
        photographerSection.appendChild(img); 

        return (photographerSection);
    }

    //price bloc
    function photographerPrice() {
        //get html section
        const priceCell = document.querySelector('.price-cell');
        //create p for price
        const price = document.createElement('p');
        price.classList.add('price-cell__price')
        price.textContent = `${data.price}€/jour`;
        priceCell.appendChild(price);

        return (priceCell);
    }

    //photographer id for display
    function photographerId() {
        const id = data.id; //console error: data undefined ?????

        return (id);
    }

    return { photographerDetails, photographerPortait, photographerPrice, photographerId }
}