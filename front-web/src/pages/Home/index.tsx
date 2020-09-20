import React from 'react';
import './styles.css';
import {ReactComponent as Arrow} from '../../assets/arrow.svg';
import {ReactComponent as GamerImage} from '../../assets/GAMER.svg';
import {Link} from 'react-router-dom'



const Home = () =>(
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                What games the gang like best?
            </h1>
            <h3 className="home-text-subtitle">
                Click on the button below and find out what games gamers are choosing!
            </h3>
            <Link to="/records">
            <div className="home-actions">
                <button className="home-btn">I WANT TO KNOW WHAT THEY ARE</button>
                <div className="home-btn-icon"><Arrow/></div>
            </div>
            </Link>
        </div>
        <GamerImage className="home-image"/>
    </div>
);

export default Home;