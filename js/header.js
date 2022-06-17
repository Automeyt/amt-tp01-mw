class AmtHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="container mx-auto sticky top-0 z-50 grid grid-cols-2 px-2 py-3">
                <div class="grid place-content-start content-center"> 
                    <a href="#" class="">
                        <img src="images/automeyt-logo.webp" class="h-10" alt="Automeyt Logo">
                    </a>
                </div>
                <div class="grid place-content-end content-center">
                    <a href="#" class="">
                    <button class="
                        text-white text-xl
                        font-bold
                        uppercase
                        px-3
                        py-1
                        rounded-l-2xl
                        shadow
                        hover:shadow-md
                        outline-none
                        focus:outline-none
                        bg-orange
                        " type="button">
                        Reach Out
                    </button>
                    </a>
                </div>
            </header>
        `
    }
}

customElements.define('amt-header', AmtHeader);