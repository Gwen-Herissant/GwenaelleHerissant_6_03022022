//ESlint rules :
/*exported galleryFactory*/
/*eslint no-unused-vars: "error"*/
galleryFactory


/**
 * Function creating the media cards for the photographer pages
*/

function galleryFactory(data) {

    function mediaCard() {
        const article = document.createElement('article');

        const link = document.createElement('a');
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


        if (typeof data.hasBeenLiked === 'undefined') {
            data.hasBeenLiked = false;
        }

        /*global likesCell:writable, likesSum:writable*/
        button.addEventListener('click', () => {
            if (data.hasBeenLiked === false) {
                data.hasBeenLiked = true;
                button.classList.add('liked');
                let i = data.likes;
                i++;
                likes.textContent = i;
                likesSum++;
                likesCell.textContent = likesSum;    
                return data.likes++;
            } else {
                data.hasBeenLiked = false
                button.classList.remove('liked');
                let i = data.likes;
                i--;
                likes.textContent = i;
                likesSum--; 
                likesCell.textContent = likesSum; 
                return data.likes--;
            }
        });

        if (data.hasBeenLiked === true ) {
            button.classList.add('liked');
        }

        const icon = document.createElement('img');
        icon.setAttribute('src', '/FishEye_code/assets/icons/heart-icon.svg');
        icon.setAttribute('alt', 'Likes');
        icon.classList.add('media-details__icon');
        button.append(icon);

        return (article);
    }

    return { mediaCard };
}



/**
 * Classes giving cards the right attributes (img/video)
*/
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
        videoElement.setAttribute("tabindex", "-1");
        //videoElement.setAttribute('controls', 'controls');
        videoElement.classList.add('media-grid__video');
        return videoElement;
    }
}


/**
 * Class sorting medias and deciding if they are img or video
*/

class MediaFactory {
    constructor(data) {
        if (data.video === undefined) {
            return new Image(data);
        } else if (data.image === undefined) {
            return new Video(data);
        }
    }
}