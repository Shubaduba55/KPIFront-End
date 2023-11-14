// script.js

"use strict";

document.addEventListener('DOMContentLoaded', function() {
   
//#region Changing Colours
    function changeColourScheme(element){
        element.classList.toggle("colour_scheme");
    }
    
    function changeThirdElement(){
        let element = document.getElementById("thirdElement");
        changeColourScheme(element);
    }

    function changeFourthElement(){
        let element = document.querySelector("#fourthElement");
        changeColourScheme(element);
    }
//#endregion

//#region Working with images
    function addImage(){
        let anchorLink = document.getElementById("linkFooFighters");
        if (anchorLink.children.length === 0){
            let newImage = document.createElement('img');
            newImage.src = "img/FooFighters-FooFighters.jpg";
            newImage.id = "imgFooFighters";
            anchorLink.appendChild(newImage);
        }
    }

    function deleteImage(){
        let delImage = document.getElementById("imgFooFighters");

        if (delImage){
            delImage.remove();
        }
    }
    function zoomIn(){
        let image = document.getElementById("imgFooFighters");
        if (image){
            let currentWidth = image.width;
            let currentHeight = image.height;
            image.style.width = (currentWidth * 1.5) + "px";
            image.style.height = (currentHeight * 1.5) + "px";

            // Scroll to the bottom of the page
            document.body.scrollIntoView({ behavior: 'instant', block: 'end' });
        }
    }
    function zoomOut(){
        let image = document.getElementById("imgFooFighters");
        if (image){
            let currentWidth = image.width;
            let currentHeight = image.height;
            image.style.width = (currentWidth / 1.5) + "px";
            image.style.height = (currentHeight / 1.5) + "px";
        }
    }

//#endregion
    document.getElementById("thirdElement").addEventListener('click', changeThirdElement);
    document.getElementById("fourthElement").addEventListener('click', changeFourthElement);

    document.querySelector("button:nth-child(1)").addEventListener("click", addImage);
    document.querySelector("button:nth-child(2)").addEventListener("click", deleteImage);
    document.querySelector("button:nth-child(3)").addEventListener("click", zoomIn);
    document.querySelector("button:nth-child(4)").addEventListener("click", zoomOut);
})