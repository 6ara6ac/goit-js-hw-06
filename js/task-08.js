const formSent = document.querySelector('.login-form')
formSent.addEventListener('submit', onFormAlert);

function onFormAlert (event) {
    const { 
        elements: {email, password}
    } = event.currentTarget;

    event.preventDefault();

    if (email.value === '' || password.value === ''){
        alert ('Все поля должны быть заполнены!')
        console.log();
    }
    
    else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log (formData);
    }
    event.currentTarget.reset();
};

