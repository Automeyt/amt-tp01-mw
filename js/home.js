class AmtHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="bg-black relative pt-16 pb-32 text-center">
            <article class="container relative mx-auto">
                <div class="w-full lg:w-6/12 px-4 py-20 mx-auto">
                    <div class="m-4 px-4 py-20 grid grid-flow-row auto-rows-max place-items-center ">
                        <h1 class="font-bold text-orange text-4xl md:text-6xl ">Automate Businesses</h1>
                        <h1 class="text-white font-bold text-2xl md:text-4xl">mainly through <span class="text-orange opacity-70">Zapier</span></h1>
                        <p class="mt-4 text-lg text-gray-300">It's time to reduce time in performing repetitive tasks. It's time to lessen or eliminate human errors. It's time to focus more on the most important tasks within the business. It's time to scale up by utilizing the power of automation.</p>
                        <div></div>
                        <button class="bg-orange text-white active:bg-gray-100 sm:text-2xl text-xl font-bold uppercase px-3 py-2 mt-10 rounded-b-3xl shadow hover:shadow-md
                            outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">REACH OUT</button>
                    </div>
                </div>
            </article>
        </section>
        `
    }
}

customElements.define('amt-body', AmtHome);