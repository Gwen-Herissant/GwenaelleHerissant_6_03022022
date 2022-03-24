function mediaFactory(data) {

    function mediaType(link) {
        let type;
        if (type === data.image) {
            const media = document.createElement( 'img' );
            media.setAttribute("src", `assets/images/${data.image}`);
            media.setAttribute('alt', data.title);
            link.appendChild(media);
        } else if (type === data.video) {
            const media = document.createElement( 'video' );
            media.setAttribute("src", `assets/images/${data.video}`);
            media.setAttribute('alt', data.title);
            link.appendChild(media);
        } else {
            throw 'Type de format inconnu.'
        }
    }

    function mediaCard(link) {
        //creates article
        const article = document.createElement( 'article' );
        //link
        const link = document.createElement('a');
        link.setAttribute('title', data.title);
        article.appendChild(link);
        //img/video
        //mediaType()
        // const media = document.createElement( 'img' );
        // media.setAttribute("src", `assets/images/${data.image}`);
        // media.setAttribute('alt', data.title);
        // link.appendChild(media);
        mediaType();
        //title
        const title = document.createElement('p');
        title.classList.add('media__title')
        title.textContent = data.title;
        article.appendChild(title);
        //likes
        const likes = document.createElement('p');
        likes.classList.add('media__likes')
        likes.textContent = data.likes;
        article.appendChild(likes);
        //heart icon
        const icon= document.createElement('i')
        icon.classList.add('media__icon')
        icon.innerHTML = '<i class="fa-solid fa-heart"></i>';
        article.appendChild(icon);

        return (article);
    }

    return { mediaCard }
}