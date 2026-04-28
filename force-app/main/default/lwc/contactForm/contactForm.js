import { LightningElement } from 'lwc';

export default class ContactForm extends LightningElement {

    nombre = '';
    email = '';
    mensaje = '';

    handleNombreChange(event) {
        this.nombre = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleMensajeChange(event) {
        this.mensaje = event.target.value;
    }

    validateNombre(event) {
        const input = event.target;
        if (!this.nombre) {
            input.setCustomValidity('El nombre es obligatorio');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    validateEmail(event) {
        const input = event.target;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!this.email) {
            input.setCustomValidity('El email es obligatorio');
        } else if (!regex.test(this.email)) {
            input.setCustomValidity('Formato de email inválido');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    validateMensaje(event) {
        const input = event.target;

        if (!this.mensaje) {
            input.setCustomValidity('El mensaje es obligatorio');
        } else if (this.mensaje.length < 10) {
            input.setCustomValidity('El mensaje debe tener al menos 10 caracteres');
        } else {
            input.setCustomValidity('');
        }
        input.reportValidity();
    }

    handleSubmit() {
        const inputs = this.template.querySelectorAll('lightning-input, lightning-textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        if (isValid) {
            alert('Formulario enviado correctamente');
        }
    }
}