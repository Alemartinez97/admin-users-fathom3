// Simulación de datos para eventos
const events = [
    { id: 1, name: 'Concierto de Rock', date: '2024-09-15', price: 50 },
    { id: 2, name: 'Teatro Musical', date: '2024-09-20', price: 70 },
    { id: 3, name: 'Stand-up Comedy', date: '2024-10-05', price: 30 }
];

const cart = [];

// Cargar eventos en la página principal
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item';
        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>Fecha: ${event.date}</p>
            <p>Precio: $${event.price}</p>
            <button onclick="addToCart(${event.id})">Añadir al Carrito</button>
            <a href="event-details.html?id=${event.id}">Ver Detalles</a>
        `;
        eventsContainer.appendChild(eventElement);
    });
}

// Cargar detalles del evento
function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'), 10);
    const event = events.find(e => e.id === eventId);

    if (event) {
        const eventDetails = document.getElementById('event-details');
        eventDetails.innerHTML = `
            <h2>${event.name}</h2>
            <p>Fecha: ${event.date}</p>
            <p>Precio: $${event.price}</p>
            <button onclick="addToCart(${event.id})">Añadir al Carrito</button>
        `;
    }
}

// Añadir al carrito
function addToCart(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        cart.push(event);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Cargar carrito en la página del carrito
function loadCart() {
    const cartContainer = document.getElementById('cart-container');
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';

    savedCart.forEach(event => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${event.name}</h3>
            <p>Fecha: ${event.date}</p>
            <p>Precio: $${event.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Inicializar la página según la vista actual
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('events-container')) {
        loadEvents();
    } else if (document.getElementById('event-details')) {
        loadEventDetails();
    } else if (document.getElementById('cart-container')) {
        loadCart();
    }
});
