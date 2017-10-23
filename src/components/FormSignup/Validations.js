export const FormSignupValidations = values => {
    const errors = {};
    const requiredFields = ['CNOMBRE','CAPELLIDOS','CTELEFONO','CEMAIL','CPASSWORD'];
    requiredFields.forEach(field =>{
        if(!values[field]){
            errors[field] = 'campo requerido';
        }
        // else{
        //     errors[field] = 'correcto'
        // }
    });
    if (values.CNOMBRE && values.CNOMBRE.length < 3) {
        errors.CNOMBRE = `mínimo 3 caracteres`;
    }
    if (values.CAPELLIDOS && values.CAPELLIDOS.length < 4) {
        errors.CAPELLIDOS = `mínimo 4 caracteres`;
    }
    if (values.CTELEFONO && values.CTELEFONO.length < 10) {
        errors.CTELEFONO = `ingresa un número de tel. válido ${values.CTELEFONO.length}/10`;
    }
    // if (values.CEMAIL === '') {
    //     errors.CEMAIL = email;
    // }
    if (values.CPASSWORD && values.CPASSWORD.length < 8) {
        errors.CPASSWORD = `mínimo 8 caracteres`;
    }

    return errors;
};