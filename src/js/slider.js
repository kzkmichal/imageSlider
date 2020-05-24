 const thumbImgCont = document.querySelector('.thumbnail-section');
 let thumbnails;
 let fullSizeImgs;
 const container = document.querySelector('.container')
 let currentImage = 0;
 const buttons = document.querySelectorAll(".btn");
 let thumbImgs;
 const slider = document.querySelector('.slides-section__container')

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
     fullSizeImgs[currentImage].classList.add('visible')
     selectThumbImg()

 }


 function reset() {
     thumbImgs.forEach(img => img.classList.remove('active'))
     fullSizeImgs.forEach(img => img.classList.remove('visible'))
 }

 function addClass() {
     let thumbnail = thumbImgs[currentImage]
     thumbnail.classList.add('active');
     let img = fullSizeImgs[currentImage]
     img.classList.add('visible');
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

 function selectThumbImg() {
     thumbImgs.forEach((img, index) => img.addEventListener('click', () => {
         currentImage = index
         reset()
         addClass();

     }))
 }