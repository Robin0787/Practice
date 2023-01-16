

let firstWindow;

function myFunction () {
    firstWindow = window.open('https://www.google.com/');
    setTimeout(() => {
       firstWindow.close();
       setTimeout(() => {
        window.open('https://www.facebook.com')
       }, 500);
    }, 3000);
}