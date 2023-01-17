

let firstWindow;

function myFunction () {
    firstWindow = window.open('https://www.google.com/');
    setTimeout(() => {
       firstWindow.close();
    }, 3000);
    setTimeout(() => {
        secondWindow();
    }, 4000);
};


function secondWindow () {
    window.open('https://www.facebook.com');
};