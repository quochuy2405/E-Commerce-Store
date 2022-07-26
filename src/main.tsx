import { Grow } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './redux/store'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          autoHideDuration={1500}
          TransitionComponent={Grow}
        >
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
