// Obtener elementos del DOM
const inputElement = document.getElementById('input1');
const buttonElement = document.getElementById('button1');
const outputElement = document.getElementById('output');

// Manejar el evento de clic en el botón
buttonElement.addEventListener('click', () => {
    const inputData = inputElement.value;

    // Validar que se haya ingresado algo
    if (inputData.trim() === '') {
        alert('Por favor, ingrese algo válido.');
        return;
    }

    // Realizar algún procesamiento con los datos de entrada
    const processedData = processData(inputData);

    // Modificar el DOM para mostrar resultados
    outputElement.innerHTML = `Resultado: ${processedData}`;

    // Almacenar datos en el Storage en formato JSON
    const dataToStore = { input: inputData, result: processedData };
    localStorage.setItem('data', JSON.stringify(dataToStore));
});

// Recuperar datos del Storage al cargar la página
window.addEventListener('load', () => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        inputElement.value = parsedData.input;
        outputElement.innerHTML = `Resultado: ${parsedData.result}`;
    }
});

// Función para procesar los datos de entrada (personaliza esta función según tus necesidades)
function processData(input) {
    // Aquí puedes implementar la lógica de procesamiento
    return input.toUpperCase(); // Ejemplo: Convertir a mayúsculas
}
