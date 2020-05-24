 const thumbImgCont = document.querySelector('.thumbnail-section');
 const fullSizeImgsCont = document.querySelector('.slides-section')
 let thumbnails;
 let fullSizeImgs;
 const container = document.querySelector('.container')
 let currentImage = 0;
 const buttons = document.querySelectorAll(".btn");
 let thumbImgs;
 const slider = document.querySelector('.slides-section__container')
 let size;


 export function addfullSizeImg(el) {
     const item =
         `   <img class="slideImg" src=${el} alt="">
      `
     slider.insertAdjacentHTML('beforeend', item)

 }

 export function addThumbnail(el) {
     const item = ` <div class="thumbnail">
                  <img class="thumbnailImg" src=${el} alt="">
              </div>
      `
     thumbImgCont.insertAdjacentHTML('beforeend', item)
 }

 export function showSlider() {
     container.classList.add('visible')
     fullSizeImgs = document.querySelectorAll('.slideImg');
     thumbnails = document.querySelectorAll('.thumbnail');
     thumbImgs = document.querySelectorAll('.thumbnailImg')
     size = fullSizeImgsCont.clientWidth
     console.log(size);

     thumbImgs.forEach((img, index) => img.addEventListener('click', () => {
         currentImage = index
         reset()
         addClass();

     }))
 }
 showSlider()

 function reset() {
     thumbImgs.forEach(img => img.classList.remove('active'))
 }

 function addClass() {
     let thumbnail = thumbImgs[currentImage]
     thumbnail.classList.add('active');
     moveSlide()
 }

 function moveSlide() {
     slider.style.transition = "transform .7s ease-in-out";
     slider.style.transform = "translateX(" + (-size * currentImage) + "px)"
 }

 function buttonCheck() {
     if (this.id === "prev") {
         currentImage > 0 ? currentImage-- : currentImage = thumbImgs.length - 1
     } else {
         currentImage < thumbImgs.length - 1 ? currentImage++ : currentImage = 0
     }
     reset()
     addClass();
 }
 buttons.forEach(btn => btn.addEventListener('click', buttonCheck));