console.log( 'It works!' );
/*
ELements - window
Events - Keydown
Exec - 'play sound'
    elements:
        A Key: .xxx-key 
        sound: .xxx-sound
    play sound
    add a class of .key.is-playing
*/

function playSound(event) {
    console.log(event.keyCode); //.keyCode is a property of the event and is found in the console under the event.

    let key = null;
    let sound = null;

    if (event.keyCode === 65) {
        console.log('the "A" key was pressed');
        key = document.querySelector('.absoluty-key');
        sound = document.querySelector('.absoluty-sound');
    } else if (event.keyCode === 83) {
        console.log('the "S" key was pressed');
        key = document.querySelector('.shade-key');
        sound = document.querySelector('.shade-sound');
    } else if (event.keyCode === 68) {
        console.log('the "D" key was pressed');
        key = document.querySelector('.drums-key');
        sound = document.querySelector('.drums-sound');
    } else if (event.keyCode === 70) {
        console.log('the "F" key was pressed');
        key = document.querySelector('.false-key');
        sound = document.querySelector('.false-sound');
    } else if (event.keyCode === 71) {
        console.log('the "G" key was pressed');
        key = document.querySelector('.girl-key');
        sound = document.querySelector('.girl-sound');
    } else if (event.keyCode === 72) {
        console.log('the "H" key was pressed');
        key = document.querySelector('.hello-key');
        sound = document.querySelector('.hello-sound');
    } else if (event.keyCode === 74) {
        console.log('the "J" key was pressed');
        key = document.querySelector('.jieeee-key');
        sound = document.querySelector('.jieeee-sound');
    } else if (event.keyCode === 75) {
        console.log('the "K" key was pressed');
        key = document.querySelector('.okuurrr-key');
        sound = document.querySelector('.okuurrr-sound');
    } else if (event.keyCode === 76) {
        console.log('the "L" key was pressed');
        key = document.querySelector('.laugh-key');
        sound = document.querySelector('.laugh-sound');
    }

    console.log(key, sound);


    if (key !== null && sound !== null) {
        key.classList.add('is-playing');
        key.addEventListener('transitionend', removeTransition);
        sound.play();
    }

}

function removeTransition(event){
    event.target.classList.remove('is-playing');
}

window.addEventListener('keydown', playSound);

