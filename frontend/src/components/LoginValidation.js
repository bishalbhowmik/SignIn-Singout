 function Validations(values) {
    let error ={};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_patterns = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.email === ""){
        error.email  ="Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){

        error.email = "Email Did not match"
        }
        
        else {
        
        error.email =""
        
        }
        
        
        if(values.password === ""){
        error.password = "Password should not be empty"
        
        }
        
        else if(!password_patterns.test(values.password)){
        
        error.password = "Password did not match"
        }
        
        else {
        error.password =""
        
        }
        
        return error;
}

export default Validations;