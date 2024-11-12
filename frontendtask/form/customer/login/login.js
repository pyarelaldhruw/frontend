
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    if (userData.length > 0) {
        // Check if email and password match
        const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');
            // Clear form
            document.getElementById('loginForm').reset();
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('User not found. Please register first.');
    }
}

// Add event listener to form
document.getElementById('form').addEventListener('submit', handleLogin);
