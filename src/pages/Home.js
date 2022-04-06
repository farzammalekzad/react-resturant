import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
    return(
        <div className="home">
            <div className="headerContainer">
                <h1>رستوران خودتون</h1>
                <p>با انواع غذاهای خوشمزه</p>
                <Link to="/menu">
                    <button>
                        سفارش بده
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Home;
