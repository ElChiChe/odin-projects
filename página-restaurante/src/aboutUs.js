import "./styles/about.css";

const content = document.querySelector("#content");

export const showAboutUs = () => {
    content.innerHTML = `
    <div class="pattern">
    </div>
    <div class="about-text">
        <h1>About Us</h1>
    </div>

    <section class="section-aboutus">
        <p>
            Apasionados por el buen vino y la comida hecha con amor, nos centramos en dar un clima cálido y amable al cliente.
        </p>
        <div class="horarios">
            <p>⌛Attention Schedule</p>
            <span>13:00 - 20:00</span>
        </div>
    </section>
    `
}