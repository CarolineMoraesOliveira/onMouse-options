console.log('running main.js');

function play(vid) {
    console.log(vid);
    vid.play();
    
}
function pause(vid) {
    console.log(vid);
    vid.pause();
    vid.currentTime = 0;
}
