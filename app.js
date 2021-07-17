document.addEventListener('DOMContentLoaded', () =>{
    //card option
    const cardArray = [
        {
            name: 'cheeseburger',
            img: 'public/cheeseburger.png'
        },
                {
            name: 'cheeseburger',
            img: 'public/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'public/fries.png'
        },
        {
            name: 'fries',
            img: 'public/fries.png'
        },
        {
            name: 'hotdog',
            img: 'public/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'public/hotdog.png'
        },
        {
            name: 'milkshake',
            img: 'public/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'public/milkshake.png'
        },
        {
            name: 'nagatoro',
            img: 'public/nagatoro.png'
        },
        {
            name: 'nagatoro',
            img: 'public/nagatoro.png'
        },
    ]
    const grid = document.querySelector('.grid_panel');
    var resultDisplay = document.querySelector('#result');
    resultDisplay.textContent = '0';
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardWon = [];
    
    //create gameboard
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'public/slime.png');
            card.setAttribute('width', 200);
            card.setAttribute('heigth', 200);
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            card.classList.add('flip-animation');
            grid.appendChild(card);
        }
    }
    cardArray.sort(() => 0.5 - Math.random());
    //check match
    function checkMatch(){
        console.log(cardsChosen);
        console.log(cardsChosenId);
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosenId[0] === cardsChosenId[1]){
            cards[optionOneId].setAttribute('src', 'public/slime.png');
            cards[optionTwoId].setAttribute('src', 'public/slime.png');
            alert('you click the same image');
        }
        else if (cardsChosen[0] == cardsChosen[1]) {
            alert('you found a match');
            cards[optionOneId].setAttribute('src', 'public/white.png');
            cards[optionTwoId].setAttribute('src', 'public/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardWon.push(cardsChosen[0]);
        }
        else {
            cards[optionOneId].setAttribute('src', 'public/slime.png');
            cards[optionTwoId].setAttribute('src', 'public/slime.png');
            alert('try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardWon.length;
    }
    //flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkMatch, 500);
        }
        
    }
    createBoard();

})
