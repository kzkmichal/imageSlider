import "./style/main.scss";
import {
    addfullSizeImg,
    addThumbnail,
    showSlider,
    clearSlider


} from "./js/slider.js"


const search = document.querySelector('.search__btn');
const query = document.querySelector('.search__description')
const numberOfImg = document.querySelector('.search__number')
let imagesArray = [];

search.addEventListener('click', function() {
    if (query.value !== "" && numberOfImg.value !== "") {
        const key = '_ZGHb0PYdO7WEj3KcXoyl4UjQccO68wWc0Ht2TQ1i-k';
        const url = `https://api.unsplash.com/search/photos?query=${query.value}&per_page=${numberOfImg.value}&client_id=${key}`;
        get(url)
        clearSearch()
    } else return

})


function get(url) {
    fetch(url)
        .then(result => {
            return result.json();
        })
        .then(data => {
            data.results.map(el => {
                imagesArray.push(el.urls.regular)
            })
        })
        .then(addImages)
        .then(imagesArray = [])
        .catch(error => failHandler(error));
}

function addImages() {
    clearSlider()
    imagesArray.forEach(el => {
        addfullSizeImg(el)
        addThumbnail(el)
    })
    showSlider()
    console.log(imagesArray)
}

function clearSearch() {
    [query, numberOfImg].forEach(el =>
        el.value = ''
    )
}

function failHandler(error) {
    console.log(error)
}