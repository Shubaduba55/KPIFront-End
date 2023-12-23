import React from "react";

function addImage(){
    let anchorLink = document.getElementById("linkFooFighters");
    if (anchorLink.children.length === 0){
        let newImage = document.createElement('img');
        newImage.src = process.env.PUBLIC_URL + "/FooFighters-FooFighters.jpg";
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


function Image(){
 
    return ( <div>

    
    <a id="linkFooFighters" href="https://www.youtube.com/watch?v=js-d7HR5ZkA&list=PLPLj3dwmpRnGPzhZ2Yxchue-UXjM6_R7k&ab_channel=GrungeMusic4U" target="_blank">
    <img 
        id="imgFooFighters" 
        src={process.env.PUBLIC_URL + "/FooFighters-FooFighters.jpg"}
        alt="Foo Fighters first album cover">
    </img>
</a>
<div>
        <button onClick={addImage}>Додати</button>
        <button onClick={deleteImage}>Видалити</button>
        <button onClick={zoomIn}>Збільшити</button>
        <button onClick={zoomOut}>Зменшити</button>
    </div>
</div>
)
};

export default Image;
