function photographerFactory(data) {

    //text details in photographer 'header'
    function photograherDetails() {
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
        tagline.classList.add('photograher-details__tagline')
        tagline.textContent = data.tagline;
        textSection.appendChild(tagline);

        return (textSection);
    }

    //portait in photographer 'header'
    const picture = `assets/photographers/${data.portrait}`;

    function photograherPortait() {
        //get html section
        const photograherSection = document.querySelector('.photographer-section');
        //create img
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt', '');
        photograherSection.appendChild(img); 

        return (photograherSection);
    }

    //price bloc
    function photograherPrice() {
        //get html section
        const priceCell = document.querySelector('.price-cell');
        //create p for price
        const price = document.createElement('p');
        price.classList.add('price-cell__price')
        price.textContent = `${data.price}€/jour`;
        priceCell.appendChild(price);

        return (priceCell);
    }

    return { picture, photograherDetails, photograherPortait, photograherPrice }
}