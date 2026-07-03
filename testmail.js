const nodemailer = require('nodemailer'); 
const t = nodemailer.createTransport({
    host: 'smtp.hostinger.com', 
    port: 465, 
    secure: true, 
    auth: {
        user: 'Sagadevan.S@devopstrioglobal.com', 
        pass: 'sagadevanapp'
    }
}); 
t.verify((err, s) => { 
    if(err) console.error("Hostinger Error:", err.response); 
    else console.log('Hostinger Success:', s); 
});
