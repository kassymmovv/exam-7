import React, {Component} from 'react';
import Render from './Components/Render/Render'
import './App.css';

import Shaverma from "./Images/Shaverma.jpg";
import Sprite from "./Images/Sprite.jpg";
import Hamburger from "./Images/Hamburger.jpg";
import Tea from "./Images/Tea.jpg";
import Coffee from "./Images/Coffee.jpg";
import Fries from "./Images/Fries.jpg";


const bankOfFood = [
    {name:'Shaverma', price: 100, image: Shaverma},
    {name:'Sprite', price: 50, image: Sprite},
    {name:'Hamburger', price: 80, image: Hamburger},
    {name:'Tea', price: 15, image: Tea},
    {name:'Coffee', price: 30, image: Coffee},
    {name:'Fries', price: 50, image: Fries},
];
class App extends Component {

    state = {
        foods:[
            {name:'Shaverma', count: 0},
            {name:'Sprite', count: 0},
            {name:'Hamburger', count: 0},
            {name:'Tea', count: 0},
            {name:'Coffee', count: 0},
            {name:'Fries', count: 0},
        ],

        totalPrice: 0
    };

  render() {

    return (
        <div className='App'>
            <Render
                adda={this.addFood}
            />
            <div className="check">
                <div>ORDER DETAILS</div>

                <p>Сумма: {this.state.totalPrice}</p>
            </div>
        </div>
    );
  }
}

export default App;