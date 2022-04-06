import React from 'react';
import MenuItem from '../component/MenuItem';
import data from '../data/data';
import '../styles/Menu.css';


const Menu = () => {
    return (
        <div className="menu">
            <div className="menuTitle">
                <h1> منوی غذا</h1>
                <div className="menuList">
                    {data.map((food, key) => {
                       return(<MenuItem key={key} name={food.name} image={food.image} price={food.price}/>
                       );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Menu;
