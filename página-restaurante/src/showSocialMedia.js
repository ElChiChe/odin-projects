import "./styles/social-media.css";
const content = document.querySelector("#content");

export const showSocialMedia = () => {
    content.innerHTML = `
    <div class="pattern">
    </div>
    <div class="about-text">
        <h1>Social Media</h1>
    </div>

    <section class="section-socialmedia">
        <div class="socialmedia-icons">
            <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
            <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
            <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1483px-X_icon_2.svg.png" />
        </div>
    </section>
    `
}