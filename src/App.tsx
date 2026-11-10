import React from 'react';
import { RouterProvider, useRouter } from './lib/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';
import { Privacidade } from './pages/Privacidade';
import { Termos } from './pages/Termos';

const Routes = () => {
  const { path } = useRouter();
  switch (path) {
    case '/contato':
      return <Contato />;
    case '/privacidade':
      return <Privacidade />;
    case '/termos':
      return <Termos />;
    default:
      return <Home />;
  }
};

function App() {
  return (
    <RouterProvider>
      <div className="overflow-hidden">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
