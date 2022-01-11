// Sorting movie list alphabetically
const sortList = () => {
    let list, i, switching, listitems, shouldSwitch;
    list = document.getElementById('movie-list');
    switching = true;

    while (switching) {
        switching = false;
        listitems = list.getElementsByTagName('li');

        for (i = 0; i < (listitems.length - 1); i++) {
            shouldSwitch = false;
            if (listitems[i].innerHTML.toLocaleLowerCase() > listitems[i + 1].innerHTML.toLocaleLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        listitems[i].parentNode.insertBefore(listitems[i + 1], listitems[i]);
        switching = true;
    }
}


// Add new item to the list
const addMovie = () => {
    let list = document.getElementById("movie-list");
    let element = document.createElement("li");
    let input = document.getElementById("new-movie").value;
    // Add delete button to element
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.className = "rmv-btn";
    element.innerHTML = input;
    element.appendChild(deleteButton);
    list.appendChild(element);
    // Remove user added list item
    deleteButton.onclick = function () {
        let parent = deleteButton.parentElement;
        parent.remove();
    }
}


//  Remove original list item
const remove = (element) => {
    let movie = element.parentElement;
    movie.remove();
}


// Search for movie
let searchBar = document.getElementById("search");
const displayMatches = () => {
    let userInput = document.getElementById("search").value;
    let target = document.getElementsByTagName("li");
    let regex = new RegExp(`${userInput}`, 'gi');
    for (i = 0; i < target.length; i++) {
        target[i].innerHTML = target[i].innerText.replace(regex, match => `<mark>${match}</mark>`);
    }
}

searchBar.addEventListener('keyup', displayMatches);