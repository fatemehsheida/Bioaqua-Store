import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: [],
        totalQty: 0,
    },
    reducers: {
        addItemToCart(state,action){
            console.log('addItemToCart reducers redux', {state, action})
            const newItem = action.payload
            const existingItme = state.items.find((item)=>item.id == newItem.id)
            state.totalQty += newItem.quantity
            
            if (existingItme){
                existingItme.quantity += newItem.quantity
                existingItme.totalPrice += newItem.totalPrice
                console.log('addItemToCart reducers redux existingItem', {existingItme})
            }
            else{
                state.items.push(
                    newItem
                )
                console.log('addItemToCart reducers redux state', {state})
            }
        },
        removeItemFromCart(state,action){
            const {id, quantity} = action.payload
            const existingItme = state.items.find((item)=>item.id == id)
            state.totalQty -= quantity
            
            if (existingItme){
                state.items.filter((item)=>item.id != id)
            }
            
        },
        IncrementQuantity(state,action){
            const id = action.payload
            const item = state.items.find((item)=> item.id == id)

            item.quantity ++
            item.totalPrice += item.price
            state.totalQty ++
        },
        RemoveItem(state,action){
            const id = action.payload
            const item = state.items.find((item)=> item.id == id)

                state.items = state.items.filter((item)=>item.id != id)
                state.totalQty -= item.quantity
            },
        DecrementQuantity(state,action){
            const id = action.payload
            const item = state.items.find((item)=> item.id == id)
            console.log(item.quantity)
            if (item.quantity == 1){
                console.log(id,item.id)
                state.items = state.items.filter((item)=>item.id != id)
                state.totalQty --
            }
            else{
                item.quantity --
                item.totalPrice -= item.price
                state.totalQty --
            }

        }
    }

})

export const cartAction = cartSlice.actions