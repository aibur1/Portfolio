import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Info = () => {
    return (
        <div>
            <div className="text-center container py-5">
               
                <ProgressBar striped variant="success" now={40} />
                <ProgressBar striped variant="info" now={20} />
                <ProgressBar striped variant="warning" now={60} />
                <ProgressBar striped variant="danger" now={80} />
              
            </div>
        </div>
    );
};

export default Info;