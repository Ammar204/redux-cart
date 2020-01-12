import React from 'react';
import Inventory from "./Inventory"
import "./css/menu.css"
export default class Menu extends React.Component{
    item = [
        {
            id:1,
            name:"Kabab",
            des:"abc",
            price:120,
            quantity : 1
        },
        {
            id:2,
            name:"Boti",
            des:"abc",
            price:200,
            quantity : 1
        },
        {
            id:3,
            name:"Nihari",
            des:"abc",
            price:300,
            quantity : 1
        },
        {
            id:4,
            name:"Kakatak",
            des:"abc",
            price:500,
            quantity : 1
        },
        {
            id:5,
            name:"Tikka",
            des:"abc",
            price:180,
            quantity : 1
        }
    ]
    
    add = (item) => Inventory.dispatch({ type: 'ADD', item })


    render(){
        return(
            <div className="menu">
                <ul>
                    {this.item.map((val) =>{
                        return(
                            <li className="item-show" key = {val.id} onClick={()=> this.add(val)}>
                                <span className="item-show-name"> {val.name} </span>                                
                                <span className="item-show-price"> {val.price}</span>
                                <br/> 
                                <span className="item-show-des">{val.des}</span>
                                <br/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}