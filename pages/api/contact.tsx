import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: string,
}



export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')

    if (req.method === 'POST') {
        let transporter = nodemailer.createTransport({
            port: 465,     
            host: "smtp.gmail.com",
            auth: {
                user: process.env.BOT_USER,
                pass: process.env.BOT_PASS,
            },
            secure: true,
        });
        // transporter.verify((error) => {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log("Ready to Send");
        //     }
        // });
        const name:string = req.body.name;
        const email:string = req.body.email;
        const message:string = req.body.message;
        const mail = {
            from: process.env.BOT_USER,
            to: process.env.USER,
            text: "Send from portfolio",
            subject: `Message from ${name}`,
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`,
        };

        transporter.sendMail(mail, (error:Boolean) => {
            if (error) {
                res.json({ status:  "ERROR" });
            } else {
                res.json({ status: "Message sent" });
            }
        });

        const mailReply = {
            from: process.env.BOT_USER,
            to: email,
            subject: `Thanks for the message, ${name}!`,
            text: 'Hello, I am Armany[bot]! You sent a message through the Contact form of my portfolio, thanks! Your message has been received, and you should get a reply soon.',
            html:
                '<div><h3>Hello, I am Armany[bot]!</h3><p>You sent a message through the Contact form on my <a href="https://armany.herokuapp.com/">portfolio</a>, thanks! Your message has been received, and you should get a reply ASAP. Meanwhile, check out my <a href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">Linkedin</a> and <a href="https://github.com/armanyfelix">Github!</a></p><h3>¡Peace!</h3></div>'
        }

        transporter.sendMail(mailReply, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
    }
}

