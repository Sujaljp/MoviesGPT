
export const validateEmailAndPassword = (email, password) =>{

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if(!isEmailValid) return "Email is invalid"

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if(!isPasswordValid) return "Password is invalid"

    return null
}