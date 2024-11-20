const validateForm = (data) => {
    const { firstname, username, email, phone, object, message } = data;

    if (!firstname || !username || !email || !phone || !object || !message) {
        return { isValid: false, message: 'Tous les champs sont obligatoires.' };
    }
    return { isValid: true };
};

module.exports = { validateForm };
