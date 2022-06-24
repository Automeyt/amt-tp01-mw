class AmtHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-black sticky top-0 z-50">
                <div class="container mx-auto grid grid-cols-2 p-6">
                    <div class="grid place-content-start content-center"> 
                        <a href="#" class="">
                            <img src="images/automeyt-logo-black-bg.webp" class="h-10" alt="Automeyt Logo">
                        </a>
                    </div>
                    <nav class="relative">
                        <div class="grid place-content-end content-center p-4 space-y-2 rounded shadow"
                            onclick="toggleNav()">
                            <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                            <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                            <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        </div>
                        <ul class="hidden absolute right-0 w-full rounded-b-lg grid lg:grid-flow-col lg:auto-cols-max 
                            lg:gap-6 py-2 text-center text-white bg-orange"
                            id="nav_list">
                            <li >
                                <a href="#">Home</a> 
                            </li>
                            <li>
                                <a href="#">Services</a> 
                            </li>
                            <li>
                                <a href="#">Blog</a> 
                            </li>
                            <li>
                                <a href="#">Pricing</a> 
                            </li>
                            <li>
                                <a href="#">Portfolio</a> 
                            </li>
                            <li>
                                <a href="#">Contact Us</a> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `
    }
}

customElements.define('amt-header', AmtHeader);

