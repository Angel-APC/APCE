document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita la recarga de la página y el envío tradicional

        // Enviar el formulario usando EmailJS
        emailjs.sendForm('service_1ppcvyt', 'template_0wjknoj', this, 'VQcLe4VNYlN6XDEYO')
            .then((response) => {
                console.log('Éxito:', response);
                document.getElementById('successMessage').style.display = 'block'; // Mostrar mensaje de éxito
            })
            .catch((error) => {
                console.log('Error:', error);
                alert('Hubo un error al enviar tu mensaje. Intenta de nuevo.');
            });
    });
});