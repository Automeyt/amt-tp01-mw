class AmtHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="">
                <a href="#" class="">
                    <img src="">
                </a>
                <nav>
                    <ul class="">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
        `
    }
}

class AmtFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-black text-white grid grid-cols-2">
                <div class="grid grid-flow-col auto-cols-max">
                    <!-- Upwork Icon -->
                    <a href="https://www.upwork.com/freelancers/~0105b4581377de52ba" rel="noopener noreferrer" target="_blank">
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
                    <p href="#" class="">
                        Copyright © 2022 Automeyt.
                    </p>
                </div>
            </footer>
        `
    }
}

customElements.define('amt-header', AmtHeader);
customElements.define('amt-footer', AmtFooter);

