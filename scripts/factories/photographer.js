function photographerFactory(data) {
    // const { name, portrait } = data;

    const picture = `assets/photographers/${data.portrait}`;

    function getUserCardDOM() {
        //creates article
        const article = document.createElement( 'article' );
        //portrait
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        article.appendChild(img);
        //name
        const name = document.createElement( 'h2' );
        name.textContent = data.name;
        article.appendChild(name);
        //location
        const location = document.createElement('p');
        location.classList.add('photographer-location')
        location.textContent = `${data.city}, ${data.country}`;
        article.appendChild(location);
        //tagline
        const tagline = document.createElement('p');
        tagline.classList.add('photograher-tagline')
        tagline.textContent = data.tagline;
        article.appendChild(tagline);
        //price per day
        const price = document.createElement('p');
        price.classList.add('photographer-price')
        price.textContent = `${data.price}€/jour`;
        article.appendChild(price);

        return (article);
    }
    return { picture, getUserCardDOM }
}