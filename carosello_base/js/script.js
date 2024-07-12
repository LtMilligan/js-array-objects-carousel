const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// -----Elemento base da innestare nell'index-----
/* <div class="carousel-item h-100">
        <img src="../${elem.image}" class="d-block w-100 h-100 object-fit-cover" alt="${elem.title}">
        <div class="carousel-caption d-none d-md-block">
            <h5>${elem.title}</h5>
            <p>${elem.text}</p>
        </div>
    </div> */

// Variabile di appoggio per gli elementi da mandare nell'index
let itemContent = ''


// Ciclo l'array andando a riempire la variabile di appoggio
images.forEach((elem) => {
    itemContent += `
    <div class="carousel-item h-100">
        <img src="../${elem.image}" class="d-block w-100 h-100 object-fit-cover" alt="${elem.title}">
        <div class="carousel-caption d-none d-md-block">
            <h5>${elem.title}</h5>
            <p>${elem.text}</p>
        </div>
    </div>`
})


// Tramite querySelector vado ad inserire tutto quello che c'è nella variabile di appoggio nel contenitore del carosello
document.querySelector('.carousel-inner').innerHTML = itemContent

// Al primo oggetto del carosello, tramite querySelector, aggiungo la classe active per renderlo l'oggetto attivo primario del carosello.
document.querySelector('.carousel-item').classList.add('active')