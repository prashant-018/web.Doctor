
    document.getElementById("whatsapp-link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        var phoneNumber = "+917489202191"; // Enter the phone number without spaces
        var whatsappUrl = "https://wa.me/" + phoneNumber;
        window.open(whatsappUrl, "_blank");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const emailInput = document.querySelector("input[type='email']");
        const passwordInput = document.querySelector("input[type='password']");
        const submitButton = document.querySelector("button");
    
        const isLoginPage = document.querySelector("h2").innerText.includes("Sign In");
    
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
    
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
    
            if (!email || !password) {
                alert("Please fill in both fields.");
                return;
            }
    
            const url = isLoginPage ? "http://localhost:5000/login" : "http://localhost:5000/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            alert(data.message);
    
            if (response.ok && isLoginPage) {
                window.location.href = "dashboard.html"; // Redirect after login
            }
        });
    });
    







    document.addEventListener("DOMContentLoaded", function () {
        const searchButton = document.querySelector(".search-bar button");
        const locationSelect = document.querySelector(".search-bar select");
        const searchInput = document.querySelector(".search-bar input");
    
        searchButton.addEventListener("click", function () {
            const selectedLocation = locationSelect.value;
            const searchQuery = searchInput.value.trim();
    
            if (selectedLocation === "Select Location") {
                alert("Please select a location before searching.");
                return;
            }
    
            if (searchQuery === "") {
                alert("Please enter a search term (doctor name, clinic, or specialization).");
                return;
            }
    
            // Simulate appointment booking or redirect to a relevant page
            alert(`Searching for ${searchQuery} in ${selectedLocation}...`);
            
            // You can redirect to a new page with query parameters like:
            // window.location.href = `search-results.html?location=${selectedLocation}&query=${searchQuery}`;
        });
    });




    async function loginUser(email, password) {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
        console.log(data);
    }
    



    async function fetchDoctors() {
        const response = await fetch("http://localhost:5000/api/doctors");
        const doctors = await response.json();
        console.log(doctors);
    }
    
