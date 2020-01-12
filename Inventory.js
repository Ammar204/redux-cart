import { createStore } from 'redux'

function Inventory(state = [], action) {
    // const item =[]
    let remove = (id) =>{
        for(let i in state){
            if (state[i].id == action.item.id){
                console.log(action.item.name)
                state.splice(i,1)
                break;
            }
                // console.log(i)

                // 
        }
    }
    let flag = false
    switch (action.type) {
        case 'ADD':
            let id = action.item.id
            for(let i of state){
                if(i.id == id){
                    i.quantity += 1
                    flag = true
                    break
                }
            }
            if(!flag)
                state.push(action.item);            
            break;
        case 'INCREASE_Q':
            let id1 = action.item.id
            for(let i of state){
                if(i.id == id1){
                    i.quantity += 1
                    // flag = true
                    break
                }
            }
            break;
        case 'DES_Q':
            let id2 = action.item.id
            for(let i of state){
                if(i.id == id2){
                    i.quantity -= 1
                    if(i.quantity == 0)
                        remove(id2)
                    break
                }
            }
            break;

        default:
            return state
    
    }
    
    // console.log(item)

    console.log(state)
    
    return state

  }
  
  export default createStore(Inventory)