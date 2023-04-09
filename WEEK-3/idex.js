// Define variables

const searchForm = document.querySelector('#search-form’);

const searchInput = document.querySelector('#search-input’);

const categoriesList = document.querySelector('#categories-list’);

const featuredList = document.querySelector('#featured-list’);

// Define functions

function searchFood(event) {

event.preventDefault();

// Get search query and clear input field

const searchQuery = searchInput.value.trim();

searchInput.value = ‘’;

// Redirect to search results page with search query as parameter window.location.href = `search.html?q=${searchQuery}`;

}

function displayCategories(categories) {

// Loop through categories and create HTML elements 

categories.forEach((category) => {

const categoryItem = document.createElement('li’);

const categoryLink = document.createElement('a’); 

const categoryImage = document.createElement('img’);

const categoryTitle = document.createElement('h3’);

// Set attributes and text content for HTML elements 

categoryLink.setAttribute('href', `category.html?id=$
{category.id}`);categoryImage.setAttribute('src', category.image);

categoryImage.setAttribute('alt', category.title);

categoryTitle.textContent = category.title;

// Append HTML elements to categories list

categoryLink.appendChild(categoryImage);

categoryLink.appendChild(categoryTitle);

categoryItem.appendChild(categoryLink);

categoriesList.appendChild(categoryItem);

});

}

function displayFeaturedItems(featuredItems) {

// Loop through featured items and create HTML elements 

featuredItems.forEach((item) => {

constitemCard = document.createElement('div’);

constitemImage = document.createElement('img’);

constitemTitle = document.createElement('h3’);

constitemDescription = document.createElement('p’);

constitemPrice = document.createElement('p’);

constitemButton = document.createElement('button’);

// Set attributes and text content for HTML elements

itemCard.setAttribute('class', 'card’);

itemImage.setAttribute('src', item.image);

itemImage.setAttribute('alt', item.title);

itemTitle.textContent = item.title;

itemDescription.textContent = item.description;

itemPrice.textContent = `$${item.price.toFixed(2)}`;
  
itemButton.textContent = 'Add to cart’;
// Append HTML elements to featured items list
itemCard.appendChild(itemImage);
itemCard.appendChild(itemTitle);
itemCard.appendChild(itemDescription);
itemCard.appendChild(itemPrice);
itemCard.appendChild(itemButton);
featuredList.appendChild(itemCard);
});
}
// Attach event listeners
searchForm.addEventListener('submit', searchFood);
// Load data and display categories and featured items
fetch('categories.json’)
.then((response) => response.json())
.then((data) => displayCategories(data));
fetch('featured-items.json’)
.then((response) => response.json())
.then((data) => displayFeaturedItems(data));
  
