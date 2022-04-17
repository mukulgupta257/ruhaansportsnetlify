const WebpageSelectScreen={
    after_render:_=>{

    },
    render:_=>{
        return`
        <div class="main-box-select-webpage">
            <div class="leftbar">
                <img src="./images/logo/logo.png" alt="Logo name" />
                <ul>
                    <a href="#/ground"><li>Cricket Ground</li></a>
                    <a href="#/shop"><li>Cricket Products</li></a>
                </ul>
            </div>
            <div class="rightbar">
                <div class="ground-card">
                    <img src="https://github.com/mukulgupta257/RuhaanSportsImageDB/blob/main/ground%20image/ground1.jpeg?raw=true" alt="gurgaon ground image" />
                    <span>Star Shine Cricket<br> Ground 1</span>
                    <span>With Flood Lights</span>
                    <span>Star Shine Sports Cricket Ground<br>
                    Kadarpur Gurugram,Harayana-122102</span>
                    <a href="https://api.whatsapp.com/send/?phone=918800198964&text=Hello%20i%20got%20your%20number%20from%20website%20and%20i%20want%20to%20book%20ground&app_absent=0">
                    <button>Book Now</button></a>
                </div>
                <div class="ground-card">
                    <img src="https://github.com/mukulgupta257/RuhaanSportsImageDB/blob/main/ground%20image/ground2.jpeg?raw=true" alt="gurgaon ground image" />
                    <span>Start Shine Cricket<br> Ground 2</span>
                    <span>Without Flood Lights</span>
                    <span>Star Shine Sports Cricket Ground<br>
                    Kadarpur Gurugram,Harayana-122102</span>
                    <a href="https://api.whatsapp.com/send/?phone=918800198964&text=Hello%20i%20got%20your%20number%20from%20website%20and%20i%20want%20to%20book%20ground&app_absent=0">
                    <button>Book Now</button></a>
                </div>
                <div class="ground-card">
                    <img src="https://github.com/mukulgupta257/RuhaanSportsImageDB/blob/main/products/pads.jpeg?raw=true" alt="gurgaon ground image" />
                    <span>Cricket Products<br>Shop</span>
                    <span>All cricket products</span>
                    <span>Ruhaan sports, Sector 7 <br>
                    Gurugram,Harayana-122001</span>
                    <a href="#/shop"><button>
                    Shop Now</button></a>
                </div>
            </div>
        </div>
        `
    }
}

export default WebpageSelectScreen