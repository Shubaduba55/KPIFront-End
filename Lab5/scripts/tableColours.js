"use strict";
const maxDecimalColourVal = 16777215; // corresponds to #FFFFFF (white)

document.addEventListener("DOMContentLoaded", function(){

//#region Help functions

    function invertColour(colour){
        let colourVal = parseInt(colour.substring(1), 16);
        let inverseColour = '#' + (maxDecimalColourVal - colourVal).toString(16).padStart('0', 6);
        return inverseColour;
    }

    function setRandomColour(element){
        // let maxDecimalColourVal = 16777215; // corresponds to #FFFFFF (white)

        let colourVal = Math.floor(Math.random() * maxDecimalColourVal);

        let colour = "#" + colourVal.toString(16).padStart(6, '0');

        let inverseColour = invertColour(colour);

        element.style.backgroundColor = colour;
        element.style.color = inverseColour;
    }

    function addHiddenColourPaletteElement(paletteId){
        let palette = document.createElement("input");
        palette.type = 'color';
        palette.style.display = 'none';
        palette.id = paletteId;
        document.body.appendChild(palette);
    }

//#endregion

//#region Table Mouse Over
    function cellAddELRandomColour(cellId){

        let cell = document.getElementById(cellId);

        cell.addEventListener("mouseover", function() {setRandomColour(cell)});
    }

    function cellAllAddELRandomColour(){
        let cells = document.querySelectorAll(".myTable td");

        for(let i = 0; i < cells.length; i++){
            cellAddELRandomColour(cells[i].id);
        }
    }
//#endregion
    
//#region Table Click Cell

    function cellAddELChooseColour(cellId, paletteId){
        let cell = document.getElementById(cellId);
        let palette = document.getElementById(paletteId);

        // EventListener for input for palette
        palette.addEventListener("input", function(){
            cell.style.backgroundColor = event.target.value;
            cell.style.color = invertColour(event.target.value);
        });

        cell.addEventListener('click', function(){palette.click();});
    }

//#endregion

//#region Table Double Click

    function columnsChangeColourThroughOne(evt){
                
        let idNumber = parseInt(evt.currentTarget.cellId.substring(4));

        let startVal = (idNumber % 2 === 0) ? 2 : 1;

        let tmpCell = document.getElementById(`cell${startVal}`);
        
        for (let i = startVal+2; tmpCell !== null; i += 2){
            tmpCell.style.backgroundColor = evt.target.value;
            tmpCell.style.color = invertColour(evt.target.value);
            tmpCell = document.getElementById(`cell${i}`);
        }
    }

    function cellAddELColourForColumns(cellId, paletteId){
        let cell = document.getElementById(cellId);
        let palette = document.getElementById(paletteId);


        palette.cell = cell;
        palette.cellId = cellId;


        palette.addEventListener("input", columnsChangeColourThroughOne);

        cell.addEventListener('dblclick', function(){palette.click();});
    }


    function addELColourForColumns(paletteId){
        let cells = document.querySelectorAll(".myTable td");

        for(let i = 0; i < cells.length; i++){
            cellAddELColourForColumns(cells[i].id, paletteId);
        }
    }
//#endregion

//#region Call functions
    cellAddELRandomColour('cell8');

    addHiddenColourPaletteElement('myColourPalette1');
    cellAddELChooseColour('cell8', 'myColourPalette1');

    addHiddenColourPaletteElement('myColourPalette2');
    cellAddELColourForColumns('cell8', 'myColourPalette2');
    // addELColourForColumns('myColourPalette2');

//#endregion

})