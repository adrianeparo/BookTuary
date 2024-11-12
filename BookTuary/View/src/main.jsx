import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './globalstyles'
import AppRoutes from './routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Router>
      <AppRoutes />
    </Router>
  </StrictMode>,
)
