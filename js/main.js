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