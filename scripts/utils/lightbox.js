class Lightbox {

  //initialise la lightbox
  static lightboxInit() {
    const mediaElements = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"], a[href$=".mp4"]'));
    const gallery = mediaElements.map(mediaElement => mediaElement.getAttribute('href'));

    mediaElements.forEach(mediaElement => {
      mediaElement.addEventListener('click', (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute('href'), gallery);
      });
    });
  }

  constructor(url, data, gallery) {
    this.element = this.buildLightBox(url);
    this.gallery = gallery;
    this.this = data.title;
    this.loadMediaElement(url);
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
    let i = this.gallery.findIndex(i => i === this.url);
    if(i === this.gallery.length - 1) {
      i = -1;
    }
    this.loadMediaElement(this.gallery[i + 1]);
  }

  prev(e) {
    e.preventDefault();
    let i = this.gallery.findIndex(i => i === this.url);
    if(i === 0) {
      i = this.gallery.length;
    }
    this.loadMediaElement(this.gallery[i - 1]);
  }

  loadMediaElement(url) {
    this.url = null;
    const container = this.element.querySelector('.lightbox__container');
    container.innerHTML = '';
    if(url.includes('.mp4') === true) {
      container.innerHTML = `<video src="${this.url = url}" controls="controls"></video>`;
    } else {
      container.innerHTML = `<img src="${this.url = url}" alt="">`;
    }
  }
  
  buildLightBox() {
    main.setAttribute('aria-hidden', 'true');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'image closeup view');
    lightbox.innerHTML = `
      <button class="lightbox__close-btn">Fermer</button>
      <a herf="" class="lightbox__next-btn">Image Suivante</a>
      <a herf="" class="lightbox__prev-btn">Image Précédente</a>
      <div class="lightbox__container"></div>
      <p class="lightbox__text">${this.title}</p>
    `;
    lightbox.querySelector('.lightbox__close-btn').addEventListener('click', this.close.bind(this));
    lightbox.querySelector('.lightbox__next-btn').addEventListener('click', this.next.bind(this));
    lightbox.querySelector('.lightbox__prev-btn').addEventListener('click', this.prev.bind(this));

    return lightbox;
  }

}