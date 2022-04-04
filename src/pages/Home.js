import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
    return(
        <div className="home">
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to="/">
                    <button>
                        ORDER NOW
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Home;
