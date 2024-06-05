import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from '../router.js'
import { store }  from "../app/store.js"
import { Provider } from "react-redux"
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { userApi } from '../features/userSlice.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={userApi}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
)
