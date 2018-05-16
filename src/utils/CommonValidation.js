export class CommonValidation{
    
    //Valida que la estructura del email es correcta.
    static  isEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //Valida que el password tenga al menos 8 carácteres de longitud y además contenga letras mayúsculas, minúsculas y dígitos.
    static validPassword(password){
        let rule = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        return rule.test(password);
    }

}

