document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    // Obtiene todos los campos de input pertenecientes al formulario
    const inputFields = loginForm.querySelectorAll('input')
    const submitButton = document.getElementById('submitButton');


function validateForm() {
    let validForm

    inputFields.forEach(function(input) {
        input.addEventListener('input',function() {
            let error = document.createElement('p')
            const inputValue = input.value

            let inputContainer = document.getElementById(input.id + 'Container')
            
            switch (input.id) {
                case 'email':
                    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputValue)){
                        if (inputContainer) {
                        error.innerHTML = 'Campo requerido: el correo debe tener un formato valido ejemplo@correo.com'
                        !inputContainer.querySelector('p') && inputContainer.appendChild(error);
                        validForm = false
                    }
                    }else{
                        const settedError = inputContainer.querySelector('p');
                        settedError && inputContainer.removeChild(settedError)
                        validForm = true

                    }
                    break;

                case 'password':
                    if(inputValue.length < 9){
                        if (inputContainer) {
                        error.innerHTML = 'La contraseña debe tener mínimo 8 caracteres'
                        !inputContainer.querySelector('p') && inputContainer.appendChild(error);
                        validForm = false
                    }
                    }else{
                        const settedError = inputContainer.querySelector('p');
                        settedError && inputContainer.removeChild(settedError)
                        validForm = true
                    }
                    break;

                default:
                    break;
            }

        })

    })

 validForm === false && submitButton.disabled
}
    
validateForm()

});
