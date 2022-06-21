
var searchNav = document.getElementById('search-nav');
searchNav.addEventListener('click', function () {
  viewSwapping('search-page');
});

var previousNav = document.getElementById('previous-nav');
previousNav.addEventListener('click', function () {
  viewSwapping('previous-weeks');
});

var databaseNav = document.getElementById('database-nav');
databaseNav.addEventListener('click', function () {
  viewSwapping('item-database-page');
});

var randomNav = document.getElementById('random-nav');
randomNav.addEventListener('click', function () {
  viewSwapping('random-item-page');
});

var featuredNav = document.getElementById('icon-header');
featuredNav.addEventListener('click', function () {
  viewSwapping('featured-page');
});

var activeView = document.querySelectorAll('.view');
var hiddenView = document.querySelectorAll('.hidden');
// console.log(activeView);
// console.log(hiddenView);

function viewSwapping(string) {
  if (event.target.className === 'featured-page' || string === 'featured-page') {
    activeView[0].className = 'view';
    hiddenView[0].className = 'view hidden';
    data.view = 'featured-page';
  } else if (data.view === 'search-page' || string === 'search-page') {
    // activeView[0].className = 'view';
    // // hiddenView[0].className = 'view hidden';
    // console.log('firing 2');
  } else if (event.target.className === 'previous-weeks' || string === 'previous-weeks') {
    activeView[0].className = 'view hidden';
    hiddenView[0].className = 'view';
    data.view = 'previous-weeks';
  } else if (data.view === 'item-database-page' || string === 'item-database-page') {
    // activeView[0].className = 'view';
    // hiddenView[0].className = 'view hidden';
    // console.log('firing 4');
  } else if (data.view === 'random-item-page' || string === 'random-item-page') {
    // activeView[0].className = 'view';
    // hiddenView[0].className = 'view hidden';
    // console.log('firing 5');
  }
}

function createNewEntry(object) {
  var liElement = document.createElement('li');
  var divElement = document.createElement('div');
  divElement.className = 'items-responsive';
  liElement.appendChild(divElement);
  var aElement = document.createElement('a');
  aElement.className = 'item-display rarity-rare';
  divElement.appendChild(aElement);
  var pictureElement = document.createElement('picture');
  aElement.appendChild(pictureElement);
  var imgElement = document.createElement('img');
  imgElement.src = object.imageUrl;
  pictureElement.appendChild(imgElement);
  var divElementTwo = document.createElement('div');
  divElementTwo.className = 'item-overlay';
  aElement.appendChild(divElementTwo);
  var divElementThree = document.createElement('div');
  divElementThree.className = 'item-content';
  divElementTwo.appendChild(divElementThree);
  var h4Element = document.createElement('h4');
  h4Element.className = 'item-name';
  divElementThree.appendChild(h4Element);
  var spanElement = document.createElement('span');
  spanElement.textContent = object.name;
  h4Element.appendChild(spanElement);
  var divElementFour = document.createElement('div');
  divElementThree.appendChild(divElementFour);
  var imgElementTwo = document.createElement('img');
  imgElementTwo.className = 'price-icon';
  imgElementTwo.src = 'images/pngaaa.com-1614746.png';
  divElementFour.appendChild(imgElementTwo);
  var pElement = document.createElement('p');
  pElement.className = 'item-price';
  pElement.textContent = object.vBucks;
  divElementFour.appendChild(pElement);
  return liElement;
}

var targetUrl = encodeURIComponent('https://api.fortnitetracker.com/v1/store');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
xhr.setRequestHeader('TRN-Api-Key', '5289a2ea-def0-46ce-ad72-cdda47f8b5fa');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.length; i++) {
    if (xhr.response[i].storeCategory === 'BRWeeklyStorefront') {
      loadFeatured(xhr.response[i]);
    }
  }
});
xhr.send();

var featuredListTwo = document.querySelector('.featured-list-2');
var featuredList = document.querySelector('.featured-list');
var previousList = document.querySelector('.previous-list');
var previousListTwo = document.querySelector('.previous-list-two');
// var previousListThree = document.querySelector('.previous-list-three');

function loadFeatured(object) {
  var entryElement = createNewEntry(object);
  if (featuredList.childNodes.length !== 7) {
    featuredList.prepend(entryElement);
  } else if (featuredList.childNodes.length === 7) {
    featuredListTwo.prepend(entryElement);
  }
}
function loadPrevious(object) {
  var entryElement = createNewEntry(object);
  if (previousList.childNodes.length !== 7) {
    previousList.prepend(entryElement);
  } else if (previousList.childNodes.length === 7) {
    previousListTwo.prepend(entryElement);
  // } else if (previousListTwo.childNodes.length === 7) {
  //   previousListThree.prepend(entryElement); no reading third if statement.
  }
}

var xhrTwo = new XMLHttpRequest();
xhrTwo.open('GET', 'https://fortnite-api.com/v2/shop/br/combined');
xhrTwo.responseType = 'json'; // alternative to this is to JSON.parse(xhrTwo.response)
xhrTwo.addEventListener('load', function () {
  for (var u = 0; u < xhrTwo.response.data.featured.entries.length; u++) {
    for (var o = 0; o < xhrTwo.response.data.featured.entries[u].items.length; o++) {
      for (var y = 0; y < xhrTwo.response.data.featured.entries[u].items[o].shopHistory.length; y++) {
        if (xhrTwo.response.data.featured.entries[u].items[o].shopHistory[y] === '2022-06-21T00:00:00Z') {
          // console.log(xhrTwo.response.data.featured.entries[u].items[o]);
          // console.log('firing');
          /*
          start is date object
          what is it going to do: subtract seven days from start.
          end with iso string
          */
          loadPrevious(xhrTwo.response.data.featured.entries[u].items[o]);
        }
      }
    }
  }

  // console.log('entries', xhrTwo.response.data.featured.entries[0]);
  // console.log('items', xhrTwo.response.data.featured.entries[0].items);
  // console.log('shop history', xhrTwo.response.data.featured.entries[0].items[0].shopHistory);
});
xhrTwo.send();
