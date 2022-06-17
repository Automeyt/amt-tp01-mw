class AmtFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-black text-white grid grid-cols-2">
                <div class="grid grid-flow-col auto-cols-max py-4 bg-blue">
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
                <div>
                    <p href="#" class="grid content-center">
                        Copyright © 2022 Automeyt.
                    </p>
                </div>
            </footer>
        `
    }
}

customElements.define('amt-footer', AmtFooter);

