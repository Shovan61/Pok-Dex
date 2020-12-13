// DOM elements
const input = document.getElementById('input');
const searchBtn = document.querySelector('#search');
const leftBtn = document.getElementById('move-left');
const rightBtn = document.getElementById('move-right');
const middleBtn = document.getElementById('move-middle');
const clearBtn = document.getElementById('clear');
// API Data

const pokemon = new Pokemon();
const ui = new UI()
// functions

const searchPokemon = () => {
const searchInput = input.value;


pokemon.getPokemon(searchInput)
.then(data => {
    console.log(data.dataJson);
    if (searchInput === '') {
        ui.showAlert();
        
    } else {
    // display In UI
    ui.showInUI(data.dataJson);
}
})
.catch(function() {
    ui.showAlert();
 });




};



// Evnet Listners
searchBtn.addEventListener('click', e => {
e.preventDefault();

searchPokemon();

});
// left btn
leftBtn.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = input.value;
    
    pokemon.getPokemon(searchInput)
    .then(data => {
        document.querySelector('#screen').innerHTML = `
        <img src="${data.dataJson.sprites.back_default}" height="100%" width="100%" alt="image"> 
        `;
    })
});

//right btn
rightBtn.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = input.value;
    
    pokemon.getPokemon(searchInput)
    .then(data => {
        document.querySelector('#screen').innerHTML = `
        <img src="${data.dataJson.sprites.other.dream_world.front_default}" height="100%" width="100%" alt="image"> 
        `;
    })
});

// middle btn
middleBtn.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = input.value;
    
    pokemon.getPokemon(searchInput)
    .then(data => {
        document.querySelector('#screen').innerHTML = `
        <img src="${data.dataJson.sprites.front_default}" height="100%" width="100%" alt="image"> 
        `;
    })
});

// Clear btn

clearBtn.addEventListener('click', e => {
e.preventDefault();

ui.clearUI();


})