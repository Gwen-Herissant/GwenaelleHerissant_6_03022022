function galleryFactory(data) {

    function mediaCard() {
        const article = document.createElement('article');

        const link = document.createElement('a');
        link.setAttribute('title', `${data.name}`);
        link.setAttribute('ariaLabel', `${data.name}`);
        article.appendChild(link);

        const media = new MediaFactory;
        console.log(media);
        link.append(media);

        const mediaDetails = document.createElement('div');
        mediaDetails.classList.add('media-details')
        mediaDetails.setAttribute('ariaLabel', 'media details');
        article.appendChild(mediaDetails);

        const title = document.createElement('p');
        title.classList.add('media-details__title')
        title.textContent = data.title;
        mediaDetails.appendChild(title);

        const likes = document.createElement('p');
        likes.classList.add('media-details__likes')
        likes.textContent = data.likes;
        mediaDetails.appendChild(likes);

        const icon = document.createElement('img');
        icon.setAttribute('src', '/FishEye_code/assets/icons/heart-icon.svg');
        icon.setAttribute('alt', 'Likes');
        icon.classList.add('media-details__icon');
        mediaDetails.append(icon);

        return (article);
    }

    return { mediaCard };
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
        //let item = data.media;  
        
        if (item.hasOwnAttribute('image')) {
            return new MediaImage();
        } else if (item.hasOwnAttribute('video')) {
            return new MediaVideo();
        } else {
            throw 'Format inconnu';
        }
    }
    
}

