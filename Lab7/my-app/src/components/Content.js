import React from "react";
import "../styles/colour.css";

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


class Content extends React.Component{

    render(){
        return (
        <div>
            <p>Місце та дата народження: м.Київ, 27.11.2003</p>
            <p id="thirdElement" onClick={changeThirdElement}>Середня освіта: Ірпінська ЗОШ I-III ступенів №17.<br></br> 
            Вища освіта: Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»</p>
        <p id="fourthElement" onClick={changeFourthElement}>Хобі:</p>
        <ul>
            <li>Кіно та музика</li>
            <li>日本語 (вивчення японської мови)</li>
            <li>Комп'ютерні ігри</li>
        </ul>    
        <p>Улюблені фільми:</p>
        <ol>
            <li>"Втеча з Шоушенку"</li>
            <li>"Інтерстеллар"</li>
            <li>"Джанґо Вільний"</li>
            <li>"Темний лицар"</li>
            <li>"Володар Перснів: Загін персня"</li>
            <li>"Кінець Євангеліону"</li>
        </ol>
        <h3>Foo Fighters</h3>  
        <p>
            Я зовсім мало подорожував у своєму житті, тож я би хотів розповісти про рок-гурт, який нещодавно для себе відкрив.
            Гурт цей - Foo Fighters. Цікавим для мене є те, що засновником його став барабанщик іншого відомого гурту (Nirvana).
            Звати його - Дейв Грол. Що також є цікавим - це те, що перший альбом цього гурту Дейв записав самостійно, оскільки 
            він не планував робити з цього кар'єру та рухатися в цьому напрямку. Так, цей 24-річний хлопець написав музику та 
            записав партії на всіх інструментах самостійно (за винятком однієї чи двох гітарних партій). І зробив він це за 5 днів!
        </p>
        </div>
        );
    }
}

export default Content;