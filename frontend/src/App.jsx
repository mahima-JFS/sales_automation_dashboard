import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Chatbot from './components/Chatbot';

import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import Header from './pages/Website/Header';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const AppContent = () => {
  const { pathname } = useLocation();

  const [chatOpen, setChatOpen] = useState(false);

  // Pages without Header and Footer
  const isAuthPage = pathname === '/login';


  // Close chatbot whenever the user changes page
  useEffect(() => {
    setChatOpen(false);
  }, [pathname]);


  return (
    <>
      <ScrollToTop />

      <div id="top">

        {/* HEADER */}
        {!isAuthPage && <Header />}


        {/* ALL ROUTES */}
        <AppRoutes />


        {/* FOOTER */}
        {!isAuthPage && (
          <Footer
            onChatOpen={() => setChatOpen(true)}
          />
        )}


        {/* CHATBOT */}
        {!isAuthPage && (
          <Chatbot
            open={chatOpen}
            onClose={() => setChatOpen(false)}
          />
        )}

      </div>
    </>
  );
};


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App;