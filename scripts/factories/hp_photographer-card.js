//ESlint rules :
/*exported photographerFactory*/
/*eslint no-unused-vars: "error"*/
photographerFactory


/**
 * Function creating the photographer cards for the homepage
*/

function photographerFactory(data) {
    // const { name, portrait } = data;

    const picture = `assets/photographers/${data.portrait}`;

    function getUserCardDOM() {
        //creates article
        const article = document.createElement( 'article' );
        article.setAttribute('role', 'article');
        //link
        const link = document.createElement('a');
        link.setAttribute('title', data.name);
        link.setAttribute('ariaLabel', data.name);
        link.setAttribute('href', `./photographer.html?id=${data.id}`);
        link.setAttribute('target', '_blank');
        article.appendChild(link);
        //portrait
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt', '');
        link.appendChild(img);
        //name
        const name = document.createElement( 'h2' );
        name.textContent = data.name;
        link.appendChild(name);
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