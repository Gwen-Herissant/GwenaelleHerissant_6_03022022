function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

/* 
soit :
- continuer l.2 en ajoutant dans {} les data nécessaire : city, country, tagline, etc...  **
- remplacer contenu de {} l.2 avec ...rest  **
- commenter l.2 et utiliser data direct dans instances : par ex sur l.11, au lieu de 'name' écrire 'data.name' (et idem pour autres infos à appeller) 

** voir ce cours : https://javascript.info/destructuring-assignment#object-destructuring 
*/

/*
Photo
Name
City, Country
Tagline
Price€/jour
*/