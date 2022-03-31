function newMediaCard(data) {

    function mediaCard() {
        // const article = document.createElement('article');

        // const link = document.createElement('a');
        // link.setAttribute('title', `${data.name}`);
        // link.setAttribute('ariaLabel', `${data.name}`);
        // article.appendChild(link);

        // const media = new MediaFactory;
        // link.appendChild(media);

        // const title = document.createElement('p');
        // title.classList.add('media__title')
        // title.textContent = data.title;
        // article.appendChild(title);

        // const likes = document.createElement('p');
        // likes.classList.add('media__likes')
        // likes.textContent = data.likes;
        // article.appendChild(likes);

        // const icon = `<i class="media__icon fa-solid fa-heart"></i>`
        // article.appendChild(icon);

        // return (article);

        const mediaCardHTML = `
            <article>
                <a title=${data.title} aria-label=${data.title}>
                    ${new MediaFactory}
                </a>
                <p class="media__title">${data.title}</p>
                <p class="media__likes">${data.likes}</p>
                <i class="media__icon fa-solid fa-heart"></i>
            </article>
        `
        return (mediaCardHTML);
    }

    return mediaCard;
}


class MediaImage {

    mediaElement(data) {
        const imageElement = document.createElement('img');
        imageElement.setAttribute("src", `assets/images/${data.image}`);
        imageElement.setAttribute('alt', data.title);

        return imageElement;
    }

}


class MediaVideo {

    mediaElement(data) {
        const videoElement = document.createElement('video');
        videoElement.setAttribute("src", `assets/images/${data.video}`);
        videoElement.setAttribute('controls', 'controls');

        return videoElement;
    }

}


class MediaFactory {

    mediaFactory(data) {
        let item = data.media;  

        if (item.hasOwnAttribute('image')) {
            return new MediaImage(data);
        } else if (item.hasOwnAttribute('video')) {
            return new MediaVideo(data);
        } else {
            throw 'Format inconnu';
        }
    }
    
}

