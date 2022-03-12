export default function validation (data) {
    let errors= {}
    if(!data.email.trim()){

        errors.email = "user name requirde"
    }

    return errors
}