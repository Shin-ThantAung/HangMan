
async function getPokemon(){
    try{
        var min = 1;
        var max = 1025;
        var randomNum = Math.floor(Math.random() * (max - min+ 1)) + min;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)

        const data = await response.json();
        const randomPokemon = data.name;
        
        console.log(randomPokemon);

        let correct = false;
        let tries = 0;



        var answer = document.getElementById("answer");
        tries ++

        if (answer == randomPokemon)
        {
            console.log("Correct Answer");
            correct = true;
        }
        else
        {
            console.log("Incorrect Answer. {0} tries left.");
        }

    }
    catch(error){
        console.error(error);
    }
}

getPokemon();


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    btnLogin.classList.add('active');
});

