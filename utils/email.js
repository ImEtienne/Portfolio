const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
    const { firstname, username, email, phone, object, message } = formData;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, 
        },
    });

    const mailOptions = {
        from: email,
        to: 'etiennekibonganiwork@gmail.com',
        subject: object,
        text: `Prenom: ${firstname}\nNom: ${username}\nEmail: ${email}\nTéléphone: ${phone}\nSujet: ${object}\nMessage: ${message}`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
