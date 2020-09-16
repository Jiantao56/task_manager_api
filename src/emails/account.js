const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: 'jtchen56@gmail.com',
            subject: 'Welcome',
            text: `Welcome to the app, ${name}.`,
          })
        console.log('Email sent')
    } catch (e) {
        console.log(e)
    }
}

const cancelEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: 'jtchen56@gmail.com',
            subject: 'Sorry',
            text: `Sorry to see you leave, but please tell us on what is wrong. Thank you, ${name}`
        })
    } catch (e) {
        
    }
}

module.exports = {
    sendWelcomeEmail,
    cancelEmail,
}
