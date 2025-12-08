import React from 'react';
import '../Styles/Preloader.css';

const Preloader = ({ isLoading }) => {
    return (
        <div className={`preloader-container ${isLoading ? '' : 'hidden'}`}>
            <div className="preloader-content">
                <img src="/logo192.png" alt="Hindusthan Logo" className="preloader-logo" />
                <div className="spinner"></div>
                <div className="preloader-text">Loading...</div>
            </div>
        </div>
    );
};

export default Preloader;
