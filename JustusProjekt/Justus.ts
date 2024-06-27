// Function to get a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color in hexadecimal format
function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create a single random div element with random styles
function createRandomElement(): HTMLElement {
    const element = document.createElement('div');

    // Set the position and size of the element randomly
    element.style.position = 'absolute';
    element.style.width = `${getRandomInt(50, 100)}px`;
    element.style.height = `${getRandomInt(50, 100)}px`;

    // Set random background color
    element.style.backgroundColor = getRandomColor();

    // Set random position within the viewport
    element.style.left = `${getRandomInt(0, window.innerWidth - 100)}px`;
    element.style.top = `${getRandomInt(0, window.innerHeight - 100)}px`;

    // Additional styling
    element.style.padding = '5px';
    element.style.border = '1px solid black';
    element.style.color = getRandomColor();
    element.style.fontSize = '20px';

    // Set the text content of the element
    element.innerText = 'Hello!';

    return element;
}

// Function to create a random number of elements and add them to the document body
function createRandomElements() {
    // Get a random number of elements to create (between 5 and 10)
    const numElements = getRandomInt(5, 1000);
    
    // Loop to create and append each element
    for (let i = 0; i < numElements; i++) {
        const randomElement = createRandomElement();
        document.body.appendChild(randomElement);
    }
}

document.body.addEventListener("click", hndClick);

function  hndClick(_event: Event): void {
    console.log(_event.currentTarget);
    let target: HTMLElement = <HTMLElement>_event.target;
    if(target == document.body)
        return;
    target.textContent = "world";
    target.style.backgroundColor = getRandomColor();
}


// When the window loads, create the random elements
window.onload = () => {
    createRandomElements();
};


window.onload = () => {
    createRandomElements();
};