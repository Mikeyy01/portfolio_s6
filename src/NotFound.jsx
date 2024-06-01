import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import initializeBlobity from './blobityConfig';



const NotFound = () => {

    useEffect(() => {
        const blobity = initializeBlobity();

        return () => {
            blobity.destroy();
        };
    }, []);


    return (
        <div className="not-found">
            <img src="/images/error.png" className="error-image" alt="error" />
            <div className="text-and-button">
                <h2>Oops!<br /> SOMETHING WENT WRONG.</h2>
                <Link to="/" className="home-button">Return To Homepage</Link>
            </div>
        </div>
    );
};
export default NotFound;
