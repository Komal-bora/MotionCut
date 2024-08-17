class Carousel {
    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = Array.from(items);
    }
  
    updateGallery() {
      this.carouselArray.forEach((el, i) => {
        el.className = `gallery-item gallery-item-${i + 1}`;
      });
    }
  
    setCurrentState(direction) {
      if (direction.className.includes('gallery-controls-previous')) {
        this.carouselArray.unshift(this.carouselArray.shift());
      } else {
        this.carouselArray.push(this.carouselArray.shift());
      }
      this.updateGallery();
    }
  
    setControls() {
      this.carouselControls.forEach((control) => {
        const button = document.createElement('button');
        button.innerText = control;
        button.addEventListener('click', (e) => {
          e.preventDefault();
          this.setCurrentState(button);
        });
        this.carouselContainer.parentNode.querySelector('.gallery-controls').appendChild(button);
      });
    }
  
    init() {
      this.updateGallery();
      this.setControls();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryControls = ['previous', 'next'];
  
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    exampleCarousel.init();
  });
  