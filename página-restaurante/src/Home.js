const content = document.querySelector("#content");

export const home = () => {
    let div = document.createElement("div");
    div.className = "container";
    content.innerHTML = `
    <div class="container">
        <div class="image-container">
            <div class="image-text">
                <h1 class="inicio-title">Restaurant</h1>
                <p>The best dishes and drinks are served in this restaurant!</p>
                <button>Read more</button>
                <div class="pattern">

                </div>
            </div>
            <div class="background-image">
            </div> 
        </div>

        <section class="section-info">
            <p>Information</p>
            <div class="icons-container">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="40" color="#000000" fill="none">
                    <path d="M9 15L6 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M15 15L18 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M12 15L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M15.5556 6C16.1481 5.44772 16.1481 4.55228 15.5556 4C14.963 3.44772 14.963 2.55228 15.5556 2M12 6C12.5926 5.44772 12.5926 4.55228 12 4C11.4074 3.44772 11.4074 2.55228 12 2M8.44444 6C9.03704 5.44772 9.03704 4.55228 8.44444 4C7.85185 3.44772 7.85185 2.55228 8.44444 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.5 19H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M12 15C15.5371 15 18.4632 12.3908 18.9485 8.99703C19.0107 8.56215 19.0418 8.3447 18.8918 8.17235C18.7419 8 18.5001 8 18.0164 8H5.98359C5.49992 8 5.25809 8 5.10816 8.17235C4.95823 8.3447 4.98933 8.56215 5.05151 8.99703C5.53679 12.3908 8.46285 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 10H20M5 10H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <span>Food</span>
                </div>
                <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="40" color="#000000" fill="none">
                    <path d="M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9" stroke="currentColor" stroke-width="1.5" />
                    <path d="M5 9H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M13 9L16 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10.0089 16.5H10M14 18H13.9911M13.0112 14H13.0023" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Drinks</span>
                </div>
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="40" color="#000000" fill="none">
                    <path d="M3.53809 17H11.0501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.5625 17H21.0665" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5349 5C13.9155 5 15.0347 6.11929 15.0347 7.5C15.0347 8.88071 13.9155 10 12.5349 10C11.1543 10 10.0352 8.88071 10.0352 7.5C10.0352 6.11929 11.1543 5 12.5349 5ZM12.5349 5C12.7016 4.5 13.4348 3.4 15.0347 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.0206 8.01509C4.07131 10.2637 1.67194 11.3016 2.03569 12.0463C4.01481 12.9814 7.65062 12.7408 11.3708 12.6012C12.3945 12.5628 13.4052 13.0702 13.6374 14.0776C13.8013 14.7892 13.8446 15.4095 14.168 15.8036C14.3534 16.0296 14.6687 16.1064 14.9501 16.0328C15.7105 15.8338 16.0248 14.9841 16.4001 13.4933C16.4734 13.2022 16.5774 12.8897 16.8586 12.7921C18.1189 12.3547 21.998 13.3194 21.998 11.5424C21.9354 9.69217 21.2618 8.53954 19.0991 6.82526C18.4033 6.27374 17.5245 6.00001 16.6426 6.0708C15.7174 6.14507 15.2864 6.26551 15.0112 6.50339" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.0127 11.9929L2.98803 16.2984C3.48754 18.5524 3.73729 19.6793 4.56 20.3397C5.38272 21.0001 6.53691 21.0001 8.8453 21.0001H17.4227C19.1452 21.0001 20.0064 21.0001 20.5779 20.4821C21.1495 19.9641 21.234 19.107 21.403 17.3927L21.9935 11.6338" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <span>Desserts</span>
                </div>
                </div>
                </section>
                </div>
                
                `;
}