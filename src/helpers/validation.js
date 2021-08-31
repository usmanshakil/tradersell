export const validateSingleField = (field) => {
    const validate = (field === null || field === "" || field === undefined) ? false : true;
     return validate
}
 
export const  validateObject=(fields) => {
    for (const field in fields) {
        if (!validateSingleField(fields[field])) {
            return false
        }
    }
    return true
}