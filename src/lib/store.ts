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
import { configureStore, createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'cart',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)
   


export  const store = configureStore({
    reducer: {
        cart : persistedReducer
    }
})
<<<<<<< HEAD

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
=======
<<<<<<< Updated upstream
=======
export type RootState = ReturnType<typeof store.getState>
>>>>>>> Stashed changes
>>>>>>> Redux
