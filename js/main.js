var searchNav = document.getElementById('search-nav');
searchNav.addEventListener('click', function () {
  viewSwapping('search-page');
});

var previousNav = document.getElementById('previous-nav');
previousNav.addEventListener('click', function () {
  viewSwapping('previous-weeks-page');
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

// var activeView = document.querySelectorAll('view');
// var hiddenView = document.querySelectorAll('hidden');
// console.log(activeView);
// console.log(hiddenView);

// function createNewUl() {
//   if (ulSelector.length === 6) {
//     var newUl = document.createElement('ul');
//     newUl.className = 'item-list';

//   }
// }

function viewSwapping(string) {
  if (data.view === 'featured-page' || string === 'featured-page') {
    // activeView[0].className = 'view';
    // hiddenView[0].className = 'view hidden';
    // console.log('firing 1');
  } else if (data.view === 'search-page' || string === 'search-page') {
    // activeView[0].className = 'view';
    // // hiddenView[0].className = 'view hidden';
    // console.log('firing 2');
  } else if (data.view === 'previous-weeks-page' || string === 'previous-weeks-page') {
    // activeView[0].className = 'view';
    // hiddenView[0].className = 'view hidden';
    // console.log('firing 3');
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
      loadEntries(xhr.response[i]);
    }

  }
});
xhr.send();

var domContent = document.querySelector('.item-list');

function loadEntries(object) {
  var entryElement = createNewEntry(object);
  domContent.prepend(entryElement);

}
