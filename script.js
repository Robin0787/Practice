

let firstWindow;

function myFunction () {
    firstWindow = window.open('https://www.google.com/');
    setTimeout(() => {
       firstWindow.close();
    }, 3000);
    setTimeout(() => {
        window.open('https://www.facebook.com');
    }, 3500);
}