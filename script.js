// ===============================
// NEXORA - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }


    // ===============================
    // SMOOTH SCROLLING
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        });
    });


    // ===============================
    // SCROLL ANIMATION
    // ===============================

    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // ===============================
    // PROJECT FILTER
    // ===============================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.getAttribute("data-category");

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            projects.forEach(project => {

                const projectCategory =
                    project.getAttribute("data-category");

                if (
                    category === "all" ||
                    projectCategory === category
                ) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }

            });

        });

    });


    // ===============================
    // SEARCH
    // ===============================

    const searchInput = document.querySelector("#searchInput");
    const searchableItems =
        document.querySelectorAll(".search-item");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const searchText =
                searchInput.value.toLowerCase().trim();

            searchableItems.forEach(item => {

                const text =
                    item.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    }


    // ===============================
    // SERVICE SELECTION
    // ===============================

    const serviceSelect =
        document.querySelector("#service");

    const optionSelect =
        document.querySelector("#serviceOption");

    if (serviceSelect && optionSelect) {

        serviceSelect.addEventListener("change", () => {

            const service = serviceSelect.value;

            optionSelect.innerHTML =
                '<option value="">Select Option</option>';

            const options = {

                video: [
                    "Instagram Reel - ₹100+",
                    "YouTube Video - ₹500+",
                    "YouTube Short - ₹100+",
                    "Cinematic Edit - ₹1,000+",
                    "Gaming Edit - ₹500+",
                    "Basic Edit - ₹100+"
                ],

                web: [
                    "Portfolio Website",
                    "Business Website",
                    "Landing Page",
                    "Personal Website",
                    "College Website",
                    "Website Redesign"
                ],

                social: [
                    "Instagram Reels",
                    "Social Posts",
                    "Content Design",
                    "Social Branding",
                    "Content Package",
                    "Profile Setup"
                ],

                design: [
                    "YouTube Thumbnail",
                    "Poster",
                    "Banner",
                    "Logo",
                    "Social Graphic",
                    "Custom Design"
                ],

                digital: [
                    "Website Setup",
                    "Portfolio Setup",
                    "Digital Branding",
                    "Content System",
                    "Automation",
                    "Custom Solution"
                ],

                freelancing: [
                    "Data Entry",
                    "Excel Work",
                    "Tally Work",
                    "Content Work",
                    "Web Work",
                    "Custom Freelance"
                ]

            };

            if (options[service]) {

                options[service].forEach(option => {

                    const newOption =
                        document.createElement("option");

                    newOption.value = option;
                    newOption.textContent = option;

                    optionSelect.appendChild(newOption);

                });

            }

        });

    }


    // ===============================
    // REQUEST ID GENERATOR
    // ===============================

    const requestId =
        document.querySelector("#requestId");

    if (requestId) {

        const randomNumber =
            Math.floor(100000 + Math.random() * 900000);

        requestId.textContent =
            "NEX-" + randomNumber;

    }


    // ===============================
    // CURRENT DATE
    // ===============================

    const dateElement =
        document.querySelector("#currentDate");

    if (dateElement) {

        const today = new Date();

        dateElement.textContent =
            today.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });

    }


    // ===============================
    // REQUEST FORM
    // ===============================

    const requestForm =
        document.querySelector("#requestForm");

    if (requestForm) {

        requestForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.querySelector("#name")?.value || "";

            const service =
                document.querySelector("#service")?.value || "";

            const details =
                document.querySelector("#projectDetails")?.value || "";

            if (!name || !service || !details) {

                alert("Please fill all required fields.");

                return;
            }

            alert(
                "Request submitted successfully! 🎉\n\n" +
                "Thank you, " + name + ".\n" +
                "NEXORA will contact you soon."
            );

        });

    }


    // ===============================
    // WHATSAPP BUTTON
    // ===============================

    const whatsappBtn =
        document.querySelector("#whatsappBtn");

    if (whatsappBtn) {

        whatsappBtn.addEventListener("click", () => {

            const message =
                "Hello NEXORA! I want to discuss a project.";

            const whatsappURL =
                "https://wa.me/?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    }


    // ===============================
    // PRINT / SAVE PDF
    // ===============================

    const printBtn =
        document.querySelector("#printBtn");

    if (printBtn) {

        printBtn.addEventListener("click", () => {
            window.print();
        });

    }


    // ===============================
    // BACK TO TOP
    // ===============================

    const topButton =
        document.querySelector("#backToTop");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }

        });

        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
