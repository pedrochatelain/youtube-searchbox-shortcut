const searchBar = document.querySelector('#search-input');

if (searchBar) {
  
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === 'y') {
      event.preventDefault();
      searchBar.firstChild.focus();
    }
  
    searchBar.addEventListener("keydown", (event) => event.stopPropagation() )
  });
}