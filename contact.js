document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault()

    let clear = 0
    /* clear past error message */
    document.getElementById("nameError").textContent = ""
    document.getElementById("ageError").textContent = ""
    document.getElementById("emailError").textContent = ""
    document.getElementById("passwordError").textContent = ""

    /* fetch the form data */
    const name = document.getElementById("name").value.trim()
    const age = document.getElementById("age").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()

    /* form null value validation */
    if (!name) {
        document.getElementById("nameError").textContent = "data not provided"
    }
    if (!age) {
        document.getElementById("ageError").textContent = "data not provided"
    }
    if (!email) {
        document.getElementById("emailError").textContent = "data not provided"
    }
    if (!password) {
        document.getElementById("passwordError").textContent = "data not provided"
    }

    /* value validation */
    const namePattern = /^[a-zA-Z]+$/
    if (!namePattern.test(name)) {
        clear = 1
        document.getElementById("nameError").textContent = "Invalid name"
    }

    if (age < 16) {
        clear = 1
        document.getElementById("ageError").textContent = "You are not eligible"
    }

    const emailPattern = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    if (!emailPattern.test(email)) {
        clear = 1
        document.getElementById("emailError").textContent = "Invalid email"
    }

    const passwordPattern = /^[\w._]{8,}$/
    if (!passwordPattern.test(password)) {
        clear = 1
        document.getElementById("passwordError").textContent = "Invalid password"
    }

    if (clear === 0) {
        console.log("Form Data:", { name, age, email, password });
        document.getElementById("form").reset();
    }
})