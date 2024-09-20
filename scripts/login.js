document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Aquí puedes agregar la lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
        message.textContent = 'Inicio de sesión exitoso!';
        message.style.color = 'green';
        // Aquí podrías redirigir al usuario a otra página
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});
