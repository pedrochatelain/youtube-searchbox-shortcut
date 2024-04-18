document.addEventListener("DOMContentLoaded", init());

function init() {

  const searchBox = document.querySelector('#search-input').firstChild;
  
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'y') {
      event.preventDefault();
      if ( ! isFullscreen()) {
        searchBox.focus();
      }
      stopPropagation();
    }
  })  
  
  function stopPropagation() {
    searchBox.addEventListener('keydown', (e) => e.stopPropagation());
  }
  
  function isFullscreen() {
    const fullscreenButton = document.querySelector('.ytp-fullscreen-button.ytp-button');
    if (fullscreenButton) {
      return fullscreenButton.getAttribute('data-title-no-tooltip') === "Exit full screen";
    }
    return false;
  }

}