import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0ieerqf', 'template_uyt7suo', e.target, 'user_q0FIl9E6qMAml3lJ2Tyuq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='container  '>
            <div className='row justify-content-md-center'>
            <div className=" col col-md-4  "
                style={{
                    margintTop: "50px",
                    width: '50%',
                    backgroundImage: `url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                }}
            >
                <h1 style={{ marginTop: '25px' }} className="text-white">Contact form</h1>
                <form onSubmit={sendEmail} className="row" style={{ margin: "25px 85px 75px 100px" }}>
                    <label className="text-white">Name</label> <br />
                    <input type="text" name="name" className="form-control" /> <br />
                    <label className="text-white">Email</label> <br />
                    <input type="email" name="user_email" className="form-control" /> <br />
                    <label className="text-white">Message</label> <br />
                    <textarea name="message" rows="4" className="form-control" /> <br />
                    <input type="submit" value="Send" className="form-control btn btn-primary" style={{ marginTop: "30px" }} />
                </form>

            </div>
            </div>
        </div>
    );
};

export default Contact;