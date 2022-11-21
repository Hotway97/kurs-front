let cards = document.getElementsByName('card-text');

cards.forEach(card =>
{
    card.innerText = card.innerText.substr(0, 30) + '…';
}
);