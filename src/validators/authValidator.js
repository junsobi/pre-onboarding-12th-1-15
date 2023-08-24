const validationEmail = email => email.includes('@');
const validationPassword = password => password.length >= 8;

export { validationEmail, validationPassword };
