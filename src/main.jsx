import React from 'react';
import ReactDOM from 'react-dom/client';
import MyGlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme";
import WhatsAppButton from './components/whatsapp';
import AppRoutes from './routes/routes';
import SiteHeader from './components/header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyGlobalStyles />
      
      <AppRoutes />
      <WhatsAppButton />
    </ThemeProvider>
  </React.StrictMode>,
)
