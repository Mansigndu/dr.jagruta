const footer = document.querySelector('.footer');

footer.innerHTML = `

<footer class="bg-[#071C46] text-white">
<div class="max-w-7xl mx-auto px-6 lg:px-12 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- DOCTOR INFO -->
       <a href="index.html" class="block">

    <h3 class="text-2xl font-bold hover:text-[#46C7D9]">
        Dr. Jagruta Bansode
    </h3>

    <p class="text-[#46C7D9] mt-2 font-medium">
        MBBS, DNB Pediatrics
    </p>
    
    <p class="text-gray-300 mt-4 leading-relaxed">
        Child Specialist & Neonatologist dedicated to providing compassionate,
        evidence-based and family-centered healthcare for newborns, infants,
        children and adolescents.
    </p>

        </a>

        <!-- QUICK LINKS -->
        <div>

            <h3 class="text-2xl font-semibold hover:text-[#46C7D9]">
                Quick Links
            </h3>

            <ul class="space-y-3 mt-4 text-gray-300">

                <li><a href="index.html" class="hover:text-white duration-300">Home</a></li>
                <li><a href="about.html" class="hover:text-white duration-300">About</a></li>
                <li><a href="services.html" class="hover:text-white duration-300">Services</a></li>
                <li><a href="appointment.html" class="hover:text-white duration-300">Appointment</a></li>
                <li><a href="contact.html" class="hover:text-white duration-300">Contact</a></li>

            </ul>

        </div>

        <!-- SERVICES -->
       <div>

    <a href="services.html" class="inline-block text-2xl font-semibold hover:text-[#46C7D9] duration-300">
        Services
    </a>

    <ul class="space-y-3 mt-4 text-gray-300">

        <li><a href="newborn-care.html" class="hover:text-white duration-300">Newborn Care</a></li>

        <li><a href="vaccination.html" class="hover:text-white duration-300">Vaccination</a></li>

        <li><a href="growth-monitoring.html" class="hover:text-white duration-300">Growth Monitoring</a></li>

        <li><a href="nutritional-counseling.html" class="hover:text-white duration-300">Nutritional Counseling</a></li>

        <li><a href="pediatric-consultation.html" class="hover:text-white duration-300">Pediatric Consultation</a></li>

    </ul>

</div>

        <!-- CONTACT -->
        <div>

            <h3 class="text-2xl font-semibold hover:text-[#46C7D9]">
                Contact
            </h3>

            <div class="mt-4 space-y-3 text-gray-300">

                <a href="tel:+918329242513"
                    class="block hover:text-white duration-300">
                    📞 +91 8329242513
                </a>

                <a href="mailto:jagrutabansode@gmail.com"
                    class="block hover:text-white duration-300">
                    ✉️ jagrutabansode@gmail.com
                </a>

                <p class="leading-relaxed">
                    📍 Samarth Healthcare,<br>
                    Andheri West, Mumbai
                </p>

            </div>

        </div>

    </div>

    <!-- COPYRIGHT -->

    <div class="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">

        © 2026 Dr. Jagruta Bansode. All Rights Reserved.

    </div>

</div>

</footer>

<!-- WHATSAPP FLOAT BUTTON -->

<a href="https://wa.me/918329242513"
 target="_blank"
 class="fixed bottom-16 right-8 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-2xl z-50 hover:scale-110 transition duration-300">

💬

</a>
`;