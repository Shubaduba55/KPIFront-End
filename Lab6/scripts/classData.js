// EXAMPLE CODE FOR TESTING

const DataType = {
    Image: {
        propertyName:'Image',
        classes: ['image']
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

let tmp = new DataInput("5454" , DataType.Image);
console.log(tmp.dataType.classes)
