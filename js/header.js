class AmtHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-black sticky top-0 z-50">
                <div class="container mx-auto relative grid grid-flow-col auto-cols-max place-content-between p-6">
                    <div class="grid place-content-start content-center"> 
                        <a href="index.html" class="">
                            <img src="images/automeyt-logo-black-bg.webp" class="h-10" alt="Automeyt Logo">
                        </a>
                    </div>
                    <nav class="hidden lg:grid" id="nav_list">
                        <ul class="absolute lg:relative right-0 w-full rounded-b-lg lg:grid 
                            lg:grid-flow-col lg:auto-cols-max lg:gap-6 py-2 text-center 
                            text-white lg: text-xl bg-orange lg:bg-transparent">
                            <li >
                                <a href="index.html">Home</a> 
                            </li>
                            <li>
                                <a href="services.html">Services</a> 
                            </li>
                            <li>
                                <a href="blog.html">Blog</a> 
                            </li>
                            <li>
                                <a href="pricing.html">Pricing</a> 
                            </li>
                            <li>
                                <a href="portfolio.html">Portfolio</a> 
                            </li>
                            <li>
                                <a href="reach-out.html">Reach Out</a> 
                            </li>
                        </ul>
                    </nav>
                    <div class="lg:hidden grid place-content-end p-4 space-y-2 rounded shadow"
                            onclick="toggleNav()">
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('amt-header', AmtHeader);

