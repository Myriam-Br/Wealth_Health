export default function validateSyntax(input, value) {
    //VALID SYNTAX REGEX
    const lettersNoSpaceFilter = /^[A-Za-z]+$/;
    const lettersSpaceFilter = /^[A-Za-z\s]*$/
    const zipCodeFilter = /^\d{5}$/
    switch(input) {
        case 'firstname':
            return getValue(lettersNoSpaceFilter, value)

        case 'lastname':
            return getValue(lettersNoSpaceFilter, value)

        case 'birthdate':
            return value

        case 'startdate':
            return value

        case 'city':
            return getValue(lettersSpaceFilter, value)

        case 'street':
            return getValue(lettersSpaceFilter, value)

        case 'zipCode':
            return getValue(zipCodeFilter, value)
        
        case 'select_state':
            return getValue(lettersSpaceFilter, value)

        case 'select_department':
            return getValue(lettersSpaceFilter, value)

        default:
        console.log("input doesn't exist");
    }
}

function getValue(re, value) {
    if(re.test(value)) {
        return value
    }else{
        return 'undefined'
    }
}
