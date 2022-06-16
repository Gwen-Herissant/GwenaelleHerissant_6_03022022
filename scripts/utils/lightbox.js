/**
* Class builing the lightbox
*/
class Lightbox {

  //initialise la lightbox
  static lightboxInit() {
    const mediaElements = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"], a[href$=".mp4"]'));
    const gallery = [];

    mediaElements.forEach(mediaElement => {
      const mediaObj = {
        href: mediaElement.getAttribute('href'),
        title: mediaElement.getAttribute('title'),
      }
      gallery.push(mediaObj);

      mediaElement.addEventListener('click', (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute('href'), e.currentTarget.getAttribute('title'), gallery);
      });
    });
  }

  constructor(href, title, gallery) {
    this.element = this.buildLightBox(href);
    this.gallery = gallery;
    this.loadMediaElement({href, title});
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.append(this.element);
    document.addEventListener('keyup', this.onKeyUp);
  }

  //accessibilité au clavier
  onKeyUp(e) {
    if(e.key === 'Escape') {
      this.close(e);
    } else if(e.key === 'ArrowLeft') {
      this.prev(e);
    } else if(e.key === 'ArrowRight') {
      this.next(e);
    }
  }

  close(e) {
    e.preventDefault();
    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'flase');
    this.element.setAttribute('aria-hidden', 'true');
    this.element.style.display = "none";
    window.setTimeout(() => {
      this.element.remove(this.element);
    }, 500);
    document.removeEventListener('keyup', this.onKeyUp);

  }

  next(e) {
    e.preventDefault();
    let position = this.gallery.findIndex(mediaObj => mediaObj.href === this.url);
    if(position === this.gallery.length - 1) {
      position = -1;
    }
    this.loadMediaElement(this.gallery[position + 1]);
    
  }

  prev(e) {
    e.preventDefault();
    let position = this.gallery.findIndex(mediaObj => mediaObj.href === this.url);
    if(position === 0) {
      position = this.gallery.length;
    }
    this.loadMediaElement(this.gallery[position - 1]);
  }

  loadMediaElement(mediaObj) {
    this.url = null;
    const container = this.element.querySelector('.lightbox__container');
    const text = this.element.querySelector('.lightbox__text');
    container.innerHTML = '';
    text.innerHTML = '';
    if(mediaObj.href.includes('.mp4') === true) {
      container.innerHTML = `<video src="${this.url = mediaObj.href}" controls="controls"></video>`;
    } else {
      container.innerHTML = `<img src="${this.url = mediaObj.href}" alt="">`;
    }
    text.innerHTML = `<p class="lightbox__title">${mediaObj.title}</p>`;
  }
  
  buildLightBox() {
    const main = document.getElementById("main");

    main.setAttribute('aria-hidden', 'true');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'image closeup view');
    lightbox.setAttribute('tabindex', '0');
    lightbox.innerHTML = `
      <button class="lightbox__close-btn">Fermer</button>
      <a herf="" class="lightbox__next-btn">Image Suivante</a>
      <a herf="" class="lightbox__prev-btn">Image Précédente</a>
      <div class="lightbox__container"></div>
      <div class="lightbox__text"></div>
    `;
    lightbox.querySelector('.lightbox__close-btn').addEventListener('click', this.close.bind(this));
    lightbox.querySelector('.lightbox__next-btn').addEventListener('click', this.next.bind(this));
    lightbox.querySelector('.lightbox__prev-btn').addEventListener('click', this.prev.bind(this));

    setTimeout(() => lightbox.focus(), 1);

    return lightbox;
  }

}