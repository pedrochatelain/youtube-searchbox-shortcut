
function init() {
  const searchBar = document.querySelector('#search-input');
  
  
  if (searchBar) {
  
    document.addEventListener("keydown", (event) => {
      const keyName = event.key;
      if (keyName === 'y' || keyName === 'Y') {
        event.preventDefault();
        const fullscreenButton = document.querySelector('.ytp-fullscreen-button.ytp-button');
        if (fullscreenButton && fullscreenButton.getAttribute('data-title-no-tooltip') === "Full screen") {
          searchBar.firstChild.focus();
        }
        if (! fullscreenButton) {
          searchBar.firstChild.focus();
        }
      }
    
      searchBar.addEventListener("keydown", (event) => event.stopPropagation() )
    });
  }
}

document.addEventListener("DOMContentLoaded", init());