 const thumbImgCont = document.getElementById('thumbnail-section');
 const fullSizeImgsCont = document.querySelector('.slides-section')
 let thumbnails;
 let fullSizeImgs;
 const captionCont = document.querySelector('.caption-container');
 const container = document.querySelector('.container')
 let currentImage = 0;


 export function addfullSizeImg(el) {
     const item = ` <div class="mySlides">
            <img src=${el} alt="">
        </div>
    `
     fullSizeImgsCont.insertAdjacentHTML('beforeend', item)

 }

 export function addThumbnail(el) {
     const item = ` <div class="thumbnail">
                <img class="demo cursor" src=${el} alt="">
            </div>
    `
     thumbImgCont.insertAdjacentHTML('beforeend', item)
 }

 export function start() {
     thumbnails = document.querySelectorAll('.thumbnail');
     fullSizeImgs = document.querySelectorAll('.mySlides');
     fullSizeImgs[0].classList.add('show')
     container.classList.add('visible')


 }

 function reset() {
     for (let img of fullSizeImgs) {
         img.classList.remove('show');
     }
     for (let thumbs of thumbnails) {
         thumbs.firstElementChild.classList.remove('active');
     }
 }

 thumbImgCont.addEventListener('click', (e) => {
     reset();

     const index = [...thumbnails].indexOf(e.target.parentNode);
     fullSizeImgs[index].classList.add('show');
     currentImage = index;
     hiLiteThumbnail();
 })

 function hiLiteThumbnail() {
     let thumbnail = thumbnails[currentImage].firstElementChild;
     thumbnail.classList.add('active');
 }

 function showPrev(e) {
     reset();
     if (e.target.classList.contains("prev") && currentImage > 0) {
         currentImage -= 1;
         fullSizeImgs[currentImage].classList.add('show');
         hiLiteThumbnail();
     } else if (e.target.classList.contains("prev") && currentImage === 0) {
         currentImage = thumbnails.length - 1;
         fullSizeImgs[currentImage].classList.add('show');
         hiLiteThumbnail();
     }
 }

 function showNext(e) {
     reset();
     if (e.target.classList.contains("next") && currentImage < thumbnails.length - 1) {
         currentImage += 1;
         fullSizeImgs[currentImage].classList.add('show');
         hiLiteThumbnail();
     } else if (e.target.classList.contains("next") && currentImage === thumbnails.length - 1) {
         currentImage = 0;
         fullSizeImgs[currentImage].classList.add('show');
         hiLiteThumbnail();
     }
 }

 captionCont.addEventListener('click', (e) => {
     if (e.target.nodeName !== 'A') return false;
     e.target.classList.contains("next") ? showNext(e) : showPrev(e);
 });