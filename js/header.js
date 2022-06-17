class AmtHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="sticky top-0 z-50">
                <div class="container mx-auto grid grid-cols-2 p-6">
                    <div class="grid place-content-start content-center"> 
                        <a href="#" class="">
                            <img src="images/automeyt-logo-black-bg.webp" class="h-10" alt="Automeyt Logo">
                        </a>
                    </div>
                    <div class="grid place-content-end content-center">
                        <a href="#" class="">
                        <button class="text-white text-xl font-bold uppercase px-3 py-1 rounded-l-2xl bg-orange" type="button">
                            Reach Out
                        </button>
                        </a>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('amt-header', AmtHeader);