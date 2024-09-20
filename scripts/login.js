document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'usuario' && password === 'contraseña') {
        message.textContent = 'Inicio de sesión exitoso!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});
