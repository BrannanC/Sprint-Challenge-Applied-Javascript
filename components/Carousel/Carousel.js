class Carousel {
    constructor(carElement){
        this.element = carElement;
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        this.imgs = this.element.querySelectorAll('img');
        this.numImgs = this.imgs.length;
        this.currentIndex = 0;
        this.container = this.element.querySelector('.car-imgs');
        this.imgs[0].style.display = "block";
        this.left.addEventListener('click', () => this.leftClick());
        this.right.addEventListener('click', () => this.rightClick());
    }

    leftClick(){
        let lastImg = this.imgs[this.currentIndex];
        this.container.style.backgroundImage = `url(${this.imgs[this.currentIndex].src})`;
        if(this.currentIndex === 0){
            this.currentIndex = this.numImgs - 1;
        } else {
            this.currentIndex--;
        }
        TweenMax.fromTo(this.imgs[this.currentIndex], 1, {
            display: 'inline',
            x: '100vw'
        }, {
            display: 'block',
            x: 0
        });
        TweenMax.fromTo(this.left, 1, {
            opacity: 0.8,
            zIndex: 1
        }, {
            opacity: 1,
            zIndex: 1
        });

        lastImg.style.display = 'none';
        this.imgs[this.currentIndex].style.display = 'inline';

    }

    rightClick(){
        let lastImg = this.imgs[this.currentIndex];
        this.container.style.backgroundImage = `url(${this.imgs[this.currentIndex].src})`;
        if(this.currentIndex === this.numImgs - 1){
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        TweenMax.fromTo(this.imgs[this.currentIndex], 1, {
            display: 'inline',
            x: '-100vw'
        }, {
            display: 'block',
            x: 0
        });
        TweenMax.fromTo(this.left, 1, {
            opacity: 0.8,
            zIndex: 1
        }, {
            opacity: 1,
            zIndex: 1
        });
        lastImg.style.display = 'none';
        
        this.imgs[this.currentIndex].style.display = 'block';
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/