const footer = document.querySelector('.footer');

footer.innerHTML = `
<footer class="bg-gradient-to-br from-[#071C2E] via-[#0B2E4A] to-[#0F3A5A] text-white relative overflow-hidden">

<!-- decorative glow -->
<div class="absolute -top-20 -left-20 w-72 h-72 bg-[#C58A1D]/20 blur-3xl rounded-full"></div>
<div class="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full"></div>

<div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- DOCTOR INFO -->
        <div class="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition">

            <a href="index.html" class="block">

                <h3 class="text-2xl font-bold hover:text-[#C58A1D] transition">
                    Dr. Jagruta Bansode
                </h3>

                <p class="text-[#C58A1D] mt-2 font-medium">
                    MBBS, DNB Pediatrics
                </p>

                <p class="text-gray-200 mt-4 leading-relaxed text-sm">
                    Child Specialist & Neonatologist providing compassionate,
                    evidence-based pediatric care for children & newborns.
                </p>

            </a>

        </div>

        <!-- QUICK LINKS -->
        <div>
            <h3 class="text-xl font-semibold mb-4 text-[#C58A1D]">Quick Links</h3>

            <ul class="space-y-3 text-gray-300">
                <li><a href="index.html" class="hover:text-white transition">🏠 Home</a></li>
                <li><a href="about.html" class="hover:text-white transition">👩‍⚕️ About</a></li>
                <li><a href="services.html" class="hover:text-white transition">🩺 Services</a></li>
                <li><a href="appointment.html" class="hover:text-white transition">📅 Appointment</a></li>
                <li><a href="contact.html" class="hover:text-white transition">📞 Contact</a></li>
            </ul>
        </div>

        <!-- SERVICES -->
        <div>
            <h3 class="text-xl font-semibold mb-4 text-[#C58A1D]">Services</h3>

            <ul class="space-y-3 text-gray-300">
                <li><a href="newborn-care.html" class="hover:text-white">Newborn Care</a></li>
                <li><a href="vaccination.html" class="hover:text-white">Vaccination</a></li>
                <li><a href="growth-monitoring.html" class="hover:text-white">Growth Monitoring</a></li>
                <li><a href="nutritional-counseling.html" class="hover:text-white">Nutrition</a></li>
                <li><a href="pediatric-consultation.html" class="hover:text-white">Consultation</a></li>
            </ul>
        </div>

        <!-- CONTACT -->
        <div class="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">

            <h3 class="text-xl font-semibold mb-4 text-[#C58A1D]">Contact</h3>

            <div class="space-y-4 text-gray-300 text-sm">

                <a href="tel:+918329242513" class="flex items-center gap-2 hover:text-white">
                    📞 +91 83292 42513
                </a>

                <a href="mailto:contact@drjagrutabansode.com" class="flex items-center gap-2 hover:text-white">
                    ✉️ contact@drjagrutabansode.com
                </a>

                <p class="flex items-start gap-2 leading-relaxed">
                    📍 Samarth Healthcare<br>
                    Andheri West, Mumbai
                </p>

            </div>

        </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 Dr. Jagruta Bansode. All Rights Reserved.
    </div>

</div>
</footer>

<!-- FLOATING WHATSAPP BUTTON -->
<a href="https://wa.me/918329242513"
 target="_blank"
 class="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition-all duration-300 z-50">

    <i class="fab fa-whatsapp"></i>

</a>
`;