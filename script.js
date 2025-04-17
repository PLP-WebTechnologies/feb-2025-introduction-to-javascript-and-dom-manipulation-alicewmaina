document.addEventListener("DOMContentLoaded", function() {
    const changeTextButton = document.getElementById("changeText");
    const changeStyleButton = document.getElementById("changeStyle");
    const addElementButton = document.getElementById("addElement");
    const removeElementButton = document.getElementById("removeElement");
    const textElement = document.getElementById("textElement");
    const container = document.getElementById("elementContainer");

    changeTextButton.addEventListener("click", function() {
        textElement.textContent = "Text has been changed!";
    });

    changeStyleButton.addEventListener("click", function() {
        textElement.style.color = "blue";
        textElement.style.fontSize = "20px";
    });

    addElementButton.addEventListener("click", function() {
        const newElement = document.createElement("p");
        newElement.textContent = "A new paragraph has been added!";
        container.appendChild(newElement);
    });

    removeElementButton.addEventListener("click", function() {
        const lastElement = container.lastElementChild;
        if (lastElement) {
            container.removeChild(lastElement);
        }
    });
});