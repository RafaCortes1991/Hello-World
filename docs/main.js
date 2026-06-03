const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else if (mySrc === "images/firefox2.png") {
        myImage.setAttribute("src", "images/firefox.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Introduce tu nombre.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('nombre', myName);
        myHeading.innerHTML = 'Mozilla es genial, ' + myName;
    }
}

if (!localStorage.getItem('nombre')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nombre');
    myHeading.innerHTML = 'Mozilla es genial, ' + storedName;
}

myButton.addEventListener("click", () => {
    setUserName();
});
