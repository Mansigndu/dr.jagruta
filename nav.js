const nav = document.querySelector('.nav');

nav.innerHTML = `
<nav class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-[#F3DFC0]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        <!-- LOGO -->
        
       <a href="index.html" class="flex items-center gap-3">

    <img
        src="https://ik.imagekit.io/5f5fo2fhm/logooo.jpeg"
        alt="Dr. Jagruta Bansode Logo"
        class="h-14 w-14 md:h-16 md:w-16 object-contain flex-shrink-0">

    <div class="leading-tight">

        <h3 class="text-[#9A6400] font-bold text-base md:text-lg">
            Dr. Jagruta Bansode
        </h3>

        <p class="text-[#C58A1D] text-xs md:text-sm font-medium">
            MBBS, DNB Pediatrics
        </p>

        <p class="text-[#6B4A1D] text-xs md:text-sm">
            Child Specialist & Neonatologist
        </p>

    </div>

</a>
        
        

        <!-- DESKTOP MENU -->
        <div class="hidden lg:flex items-center gap-8 text-[#3A2A16] font-medium">

            <a href="index.html" class="hover:text-[#C58A1D] duration-300">Home</a>

            <a href="about.html" class="hover:text-[#C58A1D] duration-300">About</a>

            <a href="services.html" class="hover:text-[#C58A1D] duration-300">Services</a>

            <a href="appointment.html" class="hover:text-[#C58A1D] duration-300">Appointment</a>

            <a href="contact.html" class="hover:text-[#C58A1D] duration-300">Contact</a>

        </div>

        <!-- CALL + MOBILE BTN -->
        <div class="flex items-center gap-4">

            <!-- CALL BUTTON -->
            <a href="tel:+918329242513"
                class="hidden lg:flex bg-gradient-to-r from-[#9A6400] to-[#C58A1D] text-white px-6 py-3 rounded-full hover:scale-105 duration-300 shadow-lg">

                Call Now

            </a>

            <!-- MOBILE MENU BUTTON -->
           <button id="menu-btn" class="lg:hidden">

    <svg xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-[#9A6400] hover:text-[#C58A1D] transition duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">

        <path stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M4 6h16M4 12h16M4 18h16" />

    </svg>

</button>

        </div>

    </div>

    <!-- OVERLAY -->
    <div id="overlay"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden">
    </div>

    <!-- MOBILE MENU -->
    <div id="mobile-menu"
        class="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white shadow-xl z-[9999]
        transform translate-x-full transition-transform duration-300">

        <div class="flex justify-between items-center p-5 border-b">

            <h2 class="text-lg font-bold text-[#9A6400]">Menu</h2>

            <button
    id="close-menu"
    class="text-3xl text-[#9A6400] hover:text-[#C58A1D] transition duration-300">
    ✕
</button>

        </div>

        <div class="flex flex-col gap-6 p-6 text-[#3A2A16] font-medium">

            <a href="index.html">Home</a>

            <a href="about.html">About</a>

            <a href="services.html">Services</a>

            <a href="appointment.html">Appointment</a>

            <a href="contact.html">Contact</a>

            <a href="tel:+918329242513"
                class="bg-gradient-to-r from-[#9A6400] to-[#C58A1D] text-white text-center py-3 rounded-full mt-4 shadow-lg">

                Call Now

            </a>

        </div>

    </div>

</nav>
`;

// BUTTONS
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

// OPEN MENU
btn.addEventListener("click", () => {
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
});

// CLOSE FUNCTION
function closeMenu() {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
}

// EVENTS
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// CLOSE ON SCROLL
window.addEventListener("scroll", () => {
    if (!menu.classList.contains("translate-x-full")) {
        closeMenu();
    }
});