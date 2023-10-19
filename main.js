// elementos del dom
const inputElement = document.getElementById('input1');
const buttonElement = document.getElementById('button1');
const outputElement = document.getElementById('output');


buttonElement.addEventListener('click', () => {
    const inputData = inputElement.value;

    // valida que se haya ingresado algo
    if (inputData.trim() === '') {
        outputElement.innerHTML = 'Por favor, ingrese algo válido.';
        return;
    }
    
    // realiza algun procesamiento con los datos de entrada
    const processedData = processData(inputData);

    // modificar el dom para mostrar resultados
    outputElement.innerHTML = `Resultado: ${processedData}`;

    // almacenar datos en el Storage en formato JSON
    const dataToStore = { input: inputData, result: processedData };
    localStorage.setItem('data', JSON.stringify(dataToStore));
});

// recuperar datos del Storage al cargar la página
window.addEventListener('load', () => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        inputElement.value = parsedData.input;
        outputElement.innerHTML = `Resultado: ${parsedData.result}`;
    }
});

// función para procesar los datos de entrada y que salga en mayuscula
function processData(input) {
    
    return input.toUpperCase(); 
}

