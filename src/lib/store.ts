// import { cartSlice } from "./slice";
// import { configureStore, createStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'




// const persistConfig = {
//     key: 'cart',
//   }
   
//   const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)
   


// export  const store = configureStore({
//     reducer:  {'cart' : persistedReducer},
    
    
// })

// export const persistor = persistStore(store)

import { cartSlice } from "./slice";
import { configureStore } from '@reduxjs/toolkit';



export  const store = configureStore({
    reducer: {
        cart : cartSlice.reducer
    }
})
<<<<<<< Updated upstream
=======
export type RootState = ReturnType<typeof store.getState>
>>>>>>> Stashed changes
