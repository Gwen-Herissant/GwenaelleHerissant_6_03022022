function galleryFactory(data) {

    let mediaFactory = new MediaFactory();

    function mediaCard() {
        const article = document.createElement('article');

        const link = document.createElement('a');
        link.setAttribute('title', `${data.name}`);
        link.setAttribute('ariaLabel', `${data.name}`);
        article.appendChild(link);

        link.append(mediaFactory);

        const mediaDetails = document.createElement('div');
        mediaDetails.classList.add('media-details')
        mediaDetails.setAttribute('ariaLabel', 'media details');
        article.appendChild(mediaDetails);

        const title = document.createElement('p');
        title.classList.add('media-details__title')
        title.textContent = data.title;
        mediaDetails.appendChild(title);

        const likesWrapper = document.createElement('div');
        likesWrapper.classList.add('media-details__likes-wrapper')
        likesWrapper.setAttribute('ariaLabel', 'likes');
        mediaDetails.appendChild(likesWrapper);

        const likes = document.createElement('p');
        likes.classList.add('media-details__likes')
        likes.textContent = data.likes;
        likesWrapper.appendChild(likes);

        const icon = document.createElement('img');
        icon.setAttribute('src', '/FishEye_code/assets/icons/heart-icon.svg');
        icon.setAttribute('alt', 'Likes');
        icon.classList.add('media-details__icon');
        likesWrapper.append(icon);

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
        if (data.hasOwnAttribute('image')) {
            return new MediaImage(data);
        } else if (data.hasOwnAttribute('video')) {
            return new MediaVideo(data);
        } else {
            throw 'Format inconnu';
        }
    }
}


