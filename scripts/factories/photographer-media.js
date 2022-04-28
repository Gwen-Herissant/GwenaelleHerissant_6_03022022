function galleryFactory(data) {

    function mediaCard() {
        const article = document.createElement('article');

        link = document.createElement('a');
        link.setAttribute('title', `${data.title}`);
        link.setAttribute('ariaLabel', `${data.title}`);
        link.setAttribute('onclick', 'return false;');
        article.appendChild(link);

        let mediaFactory = new MediaFactory(data);
        link.append(mediaFactory);
        link.setAttribute('href', `${mediaFactory.src}`);

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

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('media-likes__button');
        likesWrapper.appendChild(button);

        const icon = document.createElement('img');
        icon.setAttribute('src', '/FishEye_code/assets/icons/heart-icon.svg');
        icon.setAttribute('alt', 'Likes');
        icon.classList.add('media-details__icon');
        button.append(icon);

        return (article);
    }

    return { mediaCard };
}


class Image {
    constructor(data) {
        this.title = data.title;
        this.image = data.image;

        const imageElement = document.createElement('img');
        imageElement.setAttribute("src", `assets/images/${this.image}`);
        imageElement.setAttribute('alt', this.title);
        imageElement.classList.add('media-grid__image');
        return imageElement;
    }
}

class Video {
    constructor(data) {
        this.video = data.video;

        const videoElement = document.createElement('video');
        videoElement.setAttribute("src", `assets/images/${this.video}`);
        //videoElement.setAttribute('controls', 'controls');
        videoElement.classList.add('media-grid__video');
        return videoElement;
    }
}

class MediaFactory {
    constructor(data) {
        if (data.video === undefined) {
            return new Image(data);
        } else if (data.image === undefined) {
            return new Video(data);
        }
    }
}