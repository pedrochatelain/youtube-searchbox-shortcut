const searchBar = document.querySelector('#search-input');


if (searchBar) {
  
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === 'y' || keyName === 'Y') {
      event.preventDefault();
      const fullscreenButton = document.querySelector('.ytp-fullscreen-button.ytp-button');
      console.log(fullscreenButton.getAttribute('data-title-no-tooltip'))
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