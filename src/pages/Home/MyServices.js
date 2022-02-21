import React from 'react';
import service from './MySercies.css';

const MyServices = () => {
    return (
        <div className="py-5">
            <h2 className="pb-3 heading">MY SERVICES</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className='sub-heading'>Web Design</h4>
                        <p className="text-center">In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4 className='sub-heading'>Web Development</h4>
                        <p>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4 className='sub-heading'>Capture Code</h4>
                        <p>The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='sub-heading'>Responsive Design</h4>
                        <p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='sub-heading'>Bug Fixing</h4>
                        <p>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='sub-heading'>Web App Development</h4>
                        <p>Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. Client refers to a computer application such as a web browser.It's Amazing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;