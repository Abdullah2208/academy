const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

const nodemailer = require("nodemailer")
const port = process.env.PORT || 5000;
const app = express();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
})

app.use(express.static('../client/virtual-acadmey/build'))
// app.use('/', 
// createProxyMiddleware({
//     target: 'http://localhost:3000',
//     changeOrigin: true
// }))

app.use(express.urlencoded({extended : false}))
app.use(express.json())


app.post('/send-message', (req,res) =>{
    const formData = req.body;
    if (formData)
      res.status(200).send({success: true, message: 'Submitted'})
    else {
      res.send(404).send('<h1>Theres a problem</h1>')
    }

    const mailOptions = {
        from: '',
        to: '',
        subject: 'Virtual Acadmey',
        text: `\n${formData.name}\n${formData.email}\n${formData.message}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    
})



app.listen(port , () => console.log(`Live on ${port}. God speed soilder 🫡  🪖`))
