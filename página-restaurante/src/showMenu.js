import "./styles/menu.css";


const content = document.querySelector("#content");

console.log(content);

//Create menu
export const showMenu = () => {
    content.innerHTML = `

        <div class="pattern">
        </div>
        <div class="text-container">
            <h1>Menu</h1>
            <p>DePerlas</p>
        </div>
        <section class="section-menu">
            <div class="drinks-container">
                <img src="https://pngimg.com/d/wine_PNG99026.png" />
                <div class="drinks-item">
                    <span>Wine</span>
                    <span class="price">$6</span>
                </div>
                <div class="drinks-item">
                    <span>Soda</span>
                    <span class="price">$3</span>
                </div>
            </div>

            <div class="hamburguers-container">
                <img src="https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291348_nfsxpgUHUkphTWtkruvHW7lGvF6IdSvM.jpg" />
                <div class="drinks-item">
                    <span>Hamburguers</span>
                    <span class="price">$15</span>
                </div>
            </div>
        </section>
    `
}