//create a method that will get input from search and filter relevant cards
window.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', function () {
        filterCards();
    });
});

function filterCards() 
{
    const searchInput = document.getElementById('searchInput');
    const cardsContainer = document.getElementById('cardsContainer');
    const searchValue = searchInput.value.toLowerCase();
    const cards = Array.from(cardsContainer.getElementsByClassName('card'));

    cards.forEach(card => {

        const cardText = card.getElementsByTagName('h3')[0].innerText.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
        
    });
}