// https://randomuser.me/api 
// https://httpstat.us/404

//#region class and enum

const DataType = {
    Image: {
        propertyName:'Image',
        classes: ['image']
    },
    Name: {
        propertyName:'Name',
        classes: ['bold']
    },
    Country: {
        propertyName:'Country',
        classes: ['italic']
    },
    Postcode: {
        propertyName:'Postcode',
        classes: ['monospace', 'yellowText']
    },
    Phone: {
        propertyName:'Phone',
        classes: ['monospace', 'bold']
    },
    Text: {
        propertyName:'Text',
        classes: []
    }
}

class DataInput {
    
    constructor (value, dataType){
        if (DataType.hasOwnProperty(dataType.propertyName)){
            this.value = value;
            this.dataType = dataType;
        }
        else{
            throw Error(`Invalid DataType: ${dataType}`);
        }
    }
}
//#endregion

function elementCreateAndSetProperties(dataInputObj, tag){
    let htmlElement = document.createElement(tag);
    htmlElement.classList.add(...dataInputObj.dataType.classes);
    if (tag === "img"){
        htmlElement.src = dataInputObj.value;
    } else{
        htmlElement.textContent = `${dataInputObj.dataType.propertyName}: ${dataInputObj.value}`;
    }

    return htmlElement;
}

function processHTMLelement(dataInputObj){
    let htmlElement;
    
    switch (dataInputObj.dataType.propertyName){
        case 'Image':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "img");
            break;
        case 'Name':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "p");
            break;
        case 'Country':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "p");
            break;    
        case 'Postcode':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "p");
            break;
        case 'Phone':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "p");
            break;
        case 'Text':
            htmlElement = elementCreateAndSetProperties(dataInputObj, "p");
            break;
        default:
            throw Error(`No such DataType can be handled ${dataInputObj.dataType.propertyName}`);
    }
    
    return htmlElement;
}

function processData(userData){
    let dataList = [];
    
    dataList.push(new DataInput(userData.picture.large, DataType.Image));
    dataList.push(
        new DataInput(
        `${userData.name.first} ${userData.name.last}`, 
        DataType.Name));


    dataList.push(new DataInput(userData.location.country, DataType.Country));
    dataList.push(new DataInput(userData.location.postcode, DataType.Postcode));
    dataList.push(new DataInput(userData.phone, DataType.Phone));
    
    return dataList;
}

function addUserToHTML(userData, peopleContainerId ,functionProcessData){
    
    let peopleContainer = document.getElementById(peopleContainerId);

    let processedData = functionProcessData(userData);

    let humanContainer = document.createElement('div');
    humanContainer.classList.add('HumanContainer');
    let htmlElement;

    for(let i = 0; i < processedData.length; i++){

        htmlElement = processHTMLelement(processedData[i]);
        humanContainer.appendChild(htmlElement);
    }
    peopleContainer.appendChild(humanContainer);
}

function fetchResultMessage(message){
    let messageField = document.getElementById("fetchResult");
    messageField.textContent = message;
}

function userFetchAndDisplay(path, peopleContainerId, functionProcessData){

    fetch(path)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        } 
        return response.json();
    })
    .then(data => {
        console.log(data.results[0]);
        addUserToHTML(data.results[0], peopleContainerId, functionProcessData);
        fetchResultMessage('Success!');
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        fetchResultMessage('Error fetching data: ' + error);
    })

}

function clearPeople(peopleContainerId){
    let peopleContainer = document.getElementById(peopleContainerId);

    while (peopleContainer.firstChild) {
        peopleContainer.removeChild(peopleContainer.firstChild);
    }
}

//#region CONSTS

const url = 'https://randomuser.me/api ';
const peopleContainer = document.getElementById("PeopleContainer");
const exampleUserJSON = './data/UserExample.json'

//#endregion

document.addEventListener('DOMContentLoaded', () => {
    
    
    document.getElementById('myButton').addEventListener('click', () => {
        
        clearPeople('PeopleContainer');
        for(let i = 0; i < 5; i++){
            userFetchAndDisplay(url, 'PeopleContainer', processData);
        }
    
    });
})


