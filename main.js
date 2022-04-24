//Clases
class Personaje{
    constructor(id, nombre, img, bio){
        this.id = id
        this.nombre = nombre
        this.img = img
        this.bio = bio

    }
   
}

//Objetos
const baraka = new Personaje ('a', 'Baraka', "./images/barakaT.jpg", "He belongs to a nomadic race of mutants living in the wastelands of Outworld. His fighting skills and dreaded Blade Fury gained the attention of Shao Kahn who then recruited him into his army of destruction.")
const raiden = new Personaje ('b', 'Raiden', "./images/raidenT.jpg", "Watching events unfold from high above, the mystic Raiden realizes the grim intentions of Shao Kahn. After warning the remaining warriors from the Shaolin Tournament, Raiden soon disappears. He is believed to have ventured into the Outworld alone.")
const subzero = new Personaje ('c', 'Subzero', "./images/subzeroT.jpg", "Thought to have been vanquished in the Shaolin Tournament, Sub-Zero mysteriously returns. It is believed this secretitive member of the Lin Kuei, a legenary clan of Chinese ninjas has traveled into the Outworld to again attempt an assassination of Shang Tsung.")
const kitana = new Personaje ('d', 'Kitana', "./images/kitanaT.jpg", "Kitana's beauty hides her savage role as a personal assassin for Shao Kahn. Seen talking to an Earthrealm warrior, her motives have come under suspicion by her twin sister Mileena, but only Kitana knows her own true intentions.")
const reptile = new Personaje ('e', 'Reptile', "./images/reptileT.jpg", "Reptile lurks in the shadows stopping all those who would do his master harm. His human form is believed to disguise a horrific reptilian creature whose race was extinct millions of years ago.")
const liuKang = new Personaje ('f', 'Liu Kang', "./images/liukangT.jpg", "After winning back the Shaolin Tournament from Shang Tsung's twisted clutches and refering him to the Outworld in disgrace, Liu Kang returned to his temples. He discovered his sacred home in ruins, his Shaolin brothers lost in a vicious battle with a horde of Outworld warriors. Now he travels into the dark realm to seek revenge...")
const jax = new Personaje ('g', 'Jax', "./images/jaxT.jpg", "Major Jackson Briggs was leader of the US Special Forces unit of which Lt. Sonya Blade was a member. After recieving a signal from Sonya Blade, Jax embarks on a rescue mission, hopin to retrieve both Sonya Blade, and the elusive Kano.")
const johnnyCage = new Personaje ('h', 'Johnny Cage', './images/jcT.jpg', "The world was shocked when martial arts movie star Johnny Cage disappeared from the set of his latest film. But in truth, he was following his former ally Liu Kang into the Outworld where he plans to compete in a twisted tournament.")


//variables 
let seleccion = document.querySelector('#seleccion');
let random = document.querySelector('#random')
const personajes =[baraka, raiden, subzero, kitana, reptile, liuKang, jax, johnnyCage]

//Funciones

const cargaPersonajes = (array) => {
    array.map(el =>{
        document.querySelector('#grid').innerHTML += 
        `<div class="cartaFighter" style="background-image: url(${el.img});">
        <div class="marcoSelect botonPersonaje" id="${el.id}">
        <h2 class="mostrar">${el.nombre}</h2>
        </div>
    </div>
        `
    })

}
cargaPersonajes(personajes)

let botonPersonaje = document.querySelectorAll('.botonPersonaje')

const getRandomNumber = (min, max)=>{
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result
}

const selectorPersonajes = (idPersonaje) => {
    return personajes.find(el => el.id == idPersonaje)
}


//Eventos

botonPersonaje.forEach(el => el.onclick = (e) =>{
    e.preventDefault()
    let personaje = selectorPersonajes(e.target.id)
    document.querySelector("#bio").innerHTML =
    `<div class="selectedBox">
        <div class="grid2">
            <div class="seccion1">
                <h2>${personaje.nombre}</h2>
                <img src="${personaje.img}" alt="">
            </div>
            <div class="seccion2">
                <h2>FIGHTER BIO</h2>
                <p>${personaje.bio}</p>
            </div>
        </div>

    </div>
    `
})

random.addEventListener('click', () =>{
    let index = getRandomNumber(0, personajes.length-1);
    document.querySelector("#bio").innerHTML =
    `<div class="selectedBox">
        <div class="grid2">
            <div class="seccion1">
                <h2>${personajes[index].nombre}</h2>
                <img src="${personajes[index].img}" alt="">
            </div>
            <div class="seccion2">
                <h2>FIGHTER BIO</h2>
                <p>${personajes[index].bio}</p>
            </div>
        </div>

    </div>
    `
})