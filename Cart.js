import React from 'react';
import Inventory from "./Inventory"
import "./css/cart.css"
export default class Menu extends React.Component{
    constructor(props){
        super(props)
        
    }
    state = {selectedList :[]}
    componentWillMount(){
       
        this.setState({selectedList :  Inventory.getState()})
            Inventory.subscribe(()=> {
                const newList = Inventory.getState()
                // console.log(newList)

                this.setState({selectedList :  Inventory.getState()})
                // console.log(this.state.selectedList)
            })
    }
    increaseQ = (item) => Inventory.dispatch({ type: 'INCREASE_Q', item })
    desQ = (item) => Inventory.dispatch({ type: 'DES_Q', item })
    render(){
        // console.log(this.state.selectedList[0])
        const flag = this.props.show?  "none" : ""
        return(
            
            <div className="cart" style={{display: flag }}>
               {this.state.selectedList.map((val)=>{
                   return(
                    <div className="cart-show">
                        <span className="cart-show-name">{val.name} </span>                         
                        <span>{val.quantity}</span>
                        <button onClick={()=> this.increaseQ(val)}>+</button> 
                        <button onClick={()=> this.desQ(val)}>-</button> 
                    </div>
                   )
                   
               })}
            </div>
    )

}
}