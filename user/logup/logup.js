document.addEventListener('DOMContentLoaded', function() {
    const logupForm = document.getElementById('logupForm')
    // Obtiene todos los campos de input pertenecientes al formulario
    const inputFields = logupForm.querySelectorAll('input')
    let passwordValue = ''

    inputFields.forEach(function(input) {
        input.addEventListener('input',function() {
            let error = document.createElement('p')
            const inputValue = input.value
            
            let inputContainer
            switch (input.id) {
                case 'name':
                    inputContainer = 'nameContainer'
                    break;

                case 'lastName':
                    inputContainer = 'lastNameContainer'
                    break;

                case 'email':
                    inputContainer = 'emailContainer'
                    break;

                case 'password':
                    inputContainer = 'passwordContainer'
                    break;

                case 'passwordConfirmation':
                    inputContainer = 'passwordConfirmationContainer'
                    break;

                case 'address':
                    inputContainer = 'addressContainer'
                    break;
                default:
                    break;
            }

            let nameContainer = document.getElementById(inputContainer)


            if(input.id === 'name'){
                if(inputValue.length < 3 || inputValue.length > 20){
                    if (nameContainer) {
                    error.innerHTML = 'Campo requerido: El nombre debe tener mínimo 3 y máximo 20 caracteres.'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                }
            }

            if(input.id === 'lastName'){
                if(inputValue.length < 3 || inputValue.length > 25){
                    if (nameContainer) {
                    error.innerHTML = 'Campo requerido: El nombre debe tener mínimo 3 y máximo 25 caracteres.'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                }
            }

            if(input.id === 'email'){
                if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputValue)){
                    if (nameContainer) {
                    error.innerHTML = 'Campo requerido: el correo debe tener un formato valido ejemplo@correo.com'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                }
            }

            
            if(input.id === 'password'){
                if(inputValue.length < 9){
                    if (nameContainer) {
                    error.innerHTML = 'La contraseña debe tener mínimo 8 caracteres'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                    passwordValue = inputValue
                }
            }

            if(input.id === 'passwordConfirmation'){
                if(inputValue !== passwordValue){
                    if (nameContainer) {
                    error.innerHTML = 'Las contraseñas no coinciden'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                }
            }

            if(input.id === 'address'){
                if(inputValue.length < 3 || inputValue.length > 35){
                    if (nameContainer) {
                    error.innerHTML = 'Campo requerido: El dirección debe tener mínimo 3 y máximo 35 caracteres.'
                    !nameContainer.querySelector('p') && nameContainer.appendChild(error);
                }
                }else{
                    const settedError = nameContainer.querySelector('p');
                    settedError && nameContainer.removeChild(settedError)
                }
            }

        })
    })
});
