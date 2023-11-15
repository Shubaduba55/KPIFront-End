let fieldIDs = ["FullName", "Telephone", "Idcard", "Faculty", "Birth"]
let regExpressions = [
    /^[А-ЗЙ-ЩЮЯЄІЇҐ][а-щюяєіїґ]+\s[А-ЗЙ-ЩЮЯЄІЇҐ]\.[А-ЗЙ-ЩЮЯЄІЇҐ]\.$/,
    /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    /^[A-Z]{2}\s№\d{6}$/,
    /^[А-ЩЮЯЄІЇҐ ]{2,8}$/,
    /^(0[1-9]|[12][0-9]|3[01]|)\.(0[1-9]|1[0-2])\.([12]\d{3})$/
]

document.addEventListener("DOMContentLoaded", function(){
    
    function resetAll(fieldIDs){
        for (let i = 0; i < fieldIDs.length; i++){
            document.getElementById("result" + fieldIDs[i]).textContent = '';
            document.getElementById(fieldIDs[i]).classList.remove('error');
        }
    }

    function display(fieldIDs, inputValues){
        for (let i = 0; i < inputValues.length; i++){
            let elem = document.getElementById("result" + fieldIDs[i]);
            elem.textContent = inputValues[i];
        }
    }

    function displayInvalid(invalidIDs){
        let field;
        invalidIDs.forEach(fieldID => {
            field = document.getElementById(fieldID);
            field.classList.add('error');
        });
    }
    
    function validateDate(date){
        let day = parseInt(date.substring(0, 2), 10);
        let month = parseInt(date.substring(3, 5), 10);
        let year = parseInt(date.substring(6, 10), 10);

        
        let maxDays;

        if (month === 2){
            maxDays = (year % 4 === 0) ? 29 : 28;
        }
        else if (month < 8){
            maxDays = (month % 2 === 1) ? 31 : 30;
        }
        else{
            maxDays = (month % 2 === 1) ? 30 : 31;
        }
        return day <= maxDays;
    }

    function getValuesAndValidate(fieldIDs, regExpressions){
        let invalids = [];
        let inputs = [];
        let inputValue;
        let isValid;
        let len;
        if(fieldIDs.length === regExpressions.length){
            len = fieldIDs.length;
        }

        for (let i = 0; i < len; i++){

            inputValue = document.getElementById(fieldIDs[i]).value;
            isValid = regExpressions[i].test(inputValue);
            inputs.push(inputValue);
            if (!isValid){
                invalids.push(fieldIDs[i]);
            }
        }

        let dateId = fieldIDs.indexOf("Birth");
        
        if (invalids.indexOf("Birth") === -1){
            if(!validateDate(inputs[dateId])){
                invalids.push(fieldIDs[dateId]);
            }
        }

        return {
            'Values': inputs,
            'InvalidIDs': invalids
        }
    }
    
    
    function submitForm(){

        resetAll(fieldIDs);

        let data = getValuesAndValidate(fieldIDs, regExpressions);

        let inputs = data.Values,
            invalids = data.InvalidIDs;

        if (invalids.length > 0){
            displayInvalid(invalids);
        }
        else{
            display(fieldIDs, inputs);
        }

    }

    document.getElementById("Submit").addEventListener("click", submitForm);
})