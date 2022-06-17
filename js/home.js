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

        <section class="pb-20 bg-gray-300 -mt-24">
            <article class="container mx-auto px-4">
                <div class="grid md:grid-cols-3 text-center">
                    <!--col-1-->
                    <div class="pt-28 w-full md:4/12 px-4">
                        <div class="grid place-items-center relative min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-4 ">
                            <div class=" p-3 w-12 h-12 mb-5 shadow-lg rounded-full bg-orange bg-opacity-70 text-center">
                                <img src="images/focus-icon.svg" alt="Focus on things that matter" width="24px" height="24px">
                            </div>
                            <h2 class="text-xl font-semibold">Focus on things that matter</h2>
                            <p class="mt-2 mb-4 text-gray-600"> We will set it up and Zapier will handle the work for you automatically, so you can focus more on the important tasks within the business.</p>
                        </div>
                    </div>
                    <!--col-2-->
                    <div class="pt-20 w-full md:4/12 px-4">
                        <div class="grid place-items-center relative min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-4 ">
                            <div class=" p-3 w-12 h-12 mb-5 shadow-lg rounded-full bg-orange bg-opacity-70 text-center">
                                <img src="images/transfer-icon.svg" alt="Focus on things that matter" width="24px" height="24px">
                            </div>
                            <h2 class="text-xl font-semibold">Integrate with 3000+ Apps</h2>
                            <p class="mt-2 mb-4 text-gray-600"> Stick with the tools that work for you. Zapier connects more web apps than anyone, and they add new options every week.</p>
                        </div>
                    </div>
                    <!--col-3-->
                    <div class="pt-10 w-full md:4/12 px-4">
                        <div class="grid place-items-center relative min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-4 ">
                            <div class=" p-3 w-12 h-12 mb-5 shadow-lg rounded-full bg-orange bg-opacity-70 text-center">
                                <img src="images/transfer-icon.svg" alt="Focus on things that matter" width="24px" height="24px">
                            </div>
                            <h2 class="text-xl font-semibold">Tailor automated solutions</h2>
                            <p class="mt-2 mb-4 text-gray-600">Based on your team's needs, we can set up the automation that will fit to your processes and workflows.</p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 mt-32">
                    <div class="w-full px-4 mx-auto pl-4 pt-0 lg:pl-36 lg:pt-28">
                        <h2 class="text-3xl mb-2 font-semibold leading-normal"><q>One of the biggest advantages of automation in the workplace is time savings,</q> said Wade Foster, CEO of workflow automation platform Zapier.</h2>
                        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 md:row-start-2">As more and more work processes become digitized through the use of cloud applications, companies are finding it easier to automate mundane and repetitive tasks.</p>
                    </div>
                    <div class="p-4 md:ml-10">
                        <div class="relative overflow-hidden mx-auto bg-orange rounded-lg w-full lg:w-3/5">
                            <img class="w-full" src="images/zapier.png" alt="Zapier" width="469px" height="255px">
                            <div class="p-8 mb-4">
                                <h3 class="text-xl font-bold text-black">Zapier</h3>
                                <p class="text-md font-light mt-2 text-black">Connect your apps and automate workflows. Easy automation for busy people. Zapier moves info between your web apps automatically, so you can focus on your most important work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        `
    }
}

customElements.define('amt-body', AmtHome);