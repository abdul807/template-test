const videoElement = document.getElementById('video')
const button = document.getElementById('button')


// prompt to get the media stream , pass to video element and then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('whoops there is an ',error)
    }
}


button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;
// start picture in picture
    await videoElement.requestPictureInPicture();
// reset button
    button.disabled = false;

});


// On Load

selectMediaStream();