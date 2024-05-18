let cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
let mix = [];
let overturn = null;
let game = document.getElementById('cards');

const cardsMake=()=> {
    mix = mixed([...cards]);
    mix.forEach((value, index) => {
        let card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.textContent = '?';
        card.addEventListener('click', turn);
        game.appendChild(card);
    });
}

const mixed=(mixing)=> {
    for (let i = mixing.length - 1; i > 0; i--) {
    const letter = Math.floor(Math.random() * (i + 1));
    [mixing[i], mixing[letter]] = [mixing[letter], mixing[i]];
    }
return mixing;
}

const turn=(event)=> {
    let index = event.target.dataset.index;
    let clickCard = event.target;

    if (!overturn) {
        overturn = index;
        reveal(clickCard);
    } else {
        if (overturn !== index) {
                reveal(clickCard);
            setTimeout(() => {
        if (mix[overturn] !== mix[index]) {
                hide([overturn, index]);
                }
    overturn = null;
        }, 1000);
        }
    }
}

const reveal=(card)=> {
    let index = card.dataset.index;
    card.textContent = mix[index];
}

const hide=(indices)=> {
    indices.forEach(index => {
    document.querySelector(`[data-index="${index}"]`).textContent = '?';
});
}



cardsMake();
