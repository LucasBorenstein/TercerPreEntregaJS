
const inputElement = document.getElementById('input1');
const buttonElement = document.getElementById('button1');
const outputElement = document.getElementById('output');


buttonElement.addEventListener('click', () => {
    const inputData = inputElement.value;

   
    if (inputData.trim() === '') {
        alert('Por favor, ingrese algo válido.');
        return;
    }


    const processedData = processData(inputData);

    
    outputElement.innerHTML = `Resultado: ${processedData}`;

    
    const dataToStore = { input: inputData, result: processedData };
    localStorage.setItem('data', JSON.stringify(dataToStore));
});


window.addEventListener('load', () => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        inputElement.value = parsedData.input;
        outputElement.innerHTML = `Resultado: ${parsedData.result}`;
    }
});


function processData(input) {
    
    return input.toUpperCase(); 
}
