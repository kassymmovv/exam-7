import React from 'react'
import './/A.css'
import Fries from '../../Images/Fries.jpg'
import Shaverma from '../../Images/Shaverma.jpg'
import Hamburger from '../../Images/Hamburger.jpg'
import Coffee from '../../Images/Coffee.jpg'
import Tea from '../../Images/Tea.jpg'
import Sprite from '../../Images/Sprite.jpg'

const bank = [
    {name:'Shaverma', price: 100, image: Shaverma},
    {name:'Sprite', price: 50, image: Sprite},
    {name:'Hamburger', price: 80, image: Hamburger},
    {name:'Tea', price: 15, image: Tea},
    {name:'Coffee', price: 30, image: Coffee},
    {name:'Fries', price: 50, image: Fries},
];


const Render = props => {
    return (
        <div className='AllDishes'>
            {bank.map((good,index) => {
                return <div className="dishes" onClick={() => props.adda(good)} key={index}>
                    <img src={good.image} alt="#"/>
                    {good.name}
                    <p>Price: {good.price} СОМ</p>
                </div>
            })}
        </div>
    );
};

export default Render;