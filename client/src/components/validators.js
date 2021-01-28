export function validateLogin(login) {
    if (typeof login !== `string` || login.length === 0) {
        return {
            isGood: false,
            message: 'Login should be non empty string'
        }
    }
    const regex = /^\w{5,20}$/
    if (!regex.test(login)) {
        return {
            isGood: false,
            message: 'Login should be from 5 to 20 symbols'
        }
    }
    return {isGood: true}
}

export function validatePassword(password) {
    if (typeof password !== 'string' || password.length === 0) {
        return {
            isGood: false,
            message: 'Password should be non empty string'
        }
    }
    const regex = /^\w{8,20}$/
    if (!regex.test(password)) {
        return {
            isGood: false,
            message: 'Password should be from 8 to 20 symbols'
        }
    }
    return {isGood: true}
}

export function validateName(name) {
    if (typeof name !== 'string' || name.length === 0) {
        return {
            isGood: false,
            message: 'Name should be non empty string'
        }
    }
    const regex = /^[\w ]+$/
    if (!regex.test(name)) {
        return {
            isGood: false,
            message: 'Name should contain only latin letters and space'
        }
    }
    return {isGood: true}
}

export function validatePhone(phone) {
    if (typeof phone !== 'string' || phone.length === 0) {
        return {
            isGood: false,
            message: 'Phone should be non empty string'
        }
    }
    const regex = /^\d{11}$/
    if (!regex.test(phone)) {
        return {
            isGood: false,
            message: 'Phone should contain only 11 numbers'
        }
    }
    return {isGood: true}
}
