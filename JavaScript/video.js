// Open fullscreen for the provided URL
function openFullscreen(url) {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'fullscreen'; // Enable fullscreen permissions
  
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.style.position = 'fixed';
    fullscreenContainer.style.top = '0';
    fullscreenContainer.style.left = '0';
    fullscreenContainer.style.width = '100%';
    fullscreenContainer.style.height = '100%';
    fullscreenContainer.style.zIndex = '1000';
    fullscreenContainer.style.backgroundColor = 'black';
    fullscreenContainer.appendChild(iframe);
  
    document.body.appendChild(fullscreenContainer);
  
    // Request fullscreen mode
    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen();
    } else if (fullscreenContainer.mozRequestFullScreen) {
      fullscreenContainer.mozRequestFullScreen(); // Firefox
    } else if (fullscreenContainer.webkitRequestFullscreen) {
      fullscreenContainer.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (fullscreenContainer.msRequestFullscreen) {
      fullscreenContainer.msRequestFullscreen(); // IE/Edge
    }
  
    // Exit fullscreen and remove container on ESC or close
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        document.body.removeChild(fullscreenContainer);
      }
    });
  }

 
  // Open a YouTube video in a new tab
function openVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}

// Open a PPT in a new tab
function openPPT(pptUrl) {
  window.open(pptUrl, '_blank');
}