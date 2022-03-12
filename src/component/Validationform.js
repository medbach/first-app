export default function validation (data) {
    
    let errors= {}

    if(!data.email.trim()){

        errors.email = "user name requirde"
    }
    if(!data.password.trim()){

        errors.password = "password name requirde"
    }

    return errors
}