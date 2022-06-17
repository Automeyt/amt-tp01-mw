class AmtFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="mx-auto bg-gray-300">
                <div class="container mx-auto p-6">
                    <section class="grid grid-cols-6">
                        <div class="grid col-start-2 col-end-6 place-content-center">
                            <a href="#" class="">
                                <img src="images/automeyt-logo-gray-bg.webp" class="h-20" alt="Automeyt Logo">
                            </a>
                        </div>
                    </section>
                    <hr class="my-6 border-gray-400">
                    <section class="">
                        <div class="grid grid-flow-col auto-cols-max place-content-center py-1">
                            <!-- Upwork Icon -->
                            <a href="https://www.upwork.com/freelancers/~0105b4581377de52ba" rel="noopener noreferrer" target="_blank" class="">
                                <button class="
                                        bg-white
                                        text-black
                                        shadow-lg
                                        font-normal
                                        h-10
                                        w-10
                                        rounded-full
                                        outline-none
                                        mr-2
                                        p-3
                                    " type="button" aria-label="Explore Upwork Profile">
                                    <img src="images/upwork-icon.svg" alt="" width="16px" height="16px">
                                    </button>
                                </a>
                            <!-- Facebook Icon -->
                            <a href="https://www.facebook.com/automeyt" rel="noopener noreferrer" target="_blank">
                                <button class="
                                    bg-white
                                    text-blue-600
                                    shadow-lg
                                    font-normal
                                    h-10
                                    w-10
                                    rounded-full
                                    outline-none
                                    mr-2
                                    p-3
                                " type="button" aria-label="Explore Facebook Page">
                                <img src="images/facebook-icon.svg" alt="" width="16px" height="16px">
                                </button>
                            </a>
                            <!-- Linkedin Icon -->
                            <a href="https://www.linkedin.com/in/kyooreas/" rel="noopener noreferrer" target="_blank">
                                <button class="
                                    bg-white
                                    text-black
                                    shadow-lg
                                    font-normal
                                    h-10
                                    w-10
                                    rounded-full
                                    outline-none
                                    mr-2
                                    p-3
                                " type="button" aria-label="Explore Linkedin Profile">
                                <img src="images/linkedin-icon.svg" alt="" width="16px" height="16px">
                                </button>
                            </a>
                        </div>
                        <div class="grid grid-flow-col auto-cols-max place-content-center py-1">
                            <a href="#" class="grid content-center text-sm text-gray-600 font-semibold">
                                Copyright © 2022 Automeyt.
                            </a>
                        </div>
                    </section>
                    
                </div>
            </footer>
        `
    }
}

customElements.define('amt-footer', AmtFooter);

