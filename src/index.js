import "./style/main.scss";

import {
    config
} from "./js/config.js";


import {
    slider,
    fullSizeImgsCont,
    thumbImgCont,
    addfullSizeImg,
    addThumbnail,
    showSlider

} from "./js/slider.js"

let btn1 = document.querySelector('.auth');

const arr = []

// function addImages() {
//     arr.forEach(el => {
//         addfullSizeImg(el)
//         addThumbnail(el)
//     })
//     showSlider()
// }



function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({
            scope: config.scope[1]
        })
        .then(function() {
                console.log("Sign-in successful");
            },
            function(err) {
                console.error("Error signing in", err);
            })
        .then(loadClient)
        .then(execute)
        .then(addImages)




}

function loadClient() {
    return gapi.client.load(config.discoveryDocs)
        .then(function() {
                console.log("GAPI client loaded for API");
            },
            function(err) {
                console.error("Error loading GAPI client for API", err);
            });
}

function execute() {
    return gapi.client.photoslibrary.mediaItems.list({
            "pageSize": "100"
        })
        .then(function(response) {
                return response.result.mediaItems;
            },
            function(err) {
                console.error("Execute error", err);
            })
        .then(response => {
            response.map(el => {
                arr.push(el.baseUrl)
            });
        })

}
gapi.load("client:auth2", function() {
    gapi.client.setApiKey(config.apiKey);
    gapi.auth2.init({
        client_id: config.clientId
    });
});

btn1.addEventListener('click', authenticate)