function photographerFactory(data) {
    // const { name, portrait } = data;

    const picture = `assets/photographers/${data.portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const name = document.createElement( 'h2' );
        name.textContent = data.name;
        const location = document.createElement('p');
        location.textContent = `${data.city}, ${data.country}`;
        const tagline = document.createElement('p');
        tagline.textContent = data.tagline;
        const price = document.createElement('p');
        price.textContent = `${data.price}€/jour`;
        article.appendChild(img);
        article.appendChild(name);
        article.appendChild(location);
        article.appendChild(tagline);
        article.appendChild(price);
        return (article);
    }
    return { picture, getUserCardDOM }
}

/* 
soit :
- continuer l.2 en ajoutant dans {} les data nécessaire : city, country, tagline, etc...  **
- remplacer contenu de {} l.2 avec ...rest  **
- commenter l.2 et utiliser data direct dans instances : par ex sur l.11, au lieu de 'name' écrire 'data.name' (et idem pour autres infos à appeller) 

** voir ce cours : https://javascript.info/destructuring-assignment#object-destructuring 
*/

/*
Photo - <img>
Name - <h2>
City, Country <p>
Tagline <p>
Price€/jour <p>
*/