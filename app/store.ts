import {configureStore} from "@reduxjs/toolkit"
import { userApi } from "../slice/apiSlice";
import pageReducer from "../slice/pageSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        page: pageReducer,
    }, 
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  })
  
  setupListeners(store.dispatch)

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;