import { Routes, Route } from 'react-router-dom';
import UsuariosPage from './features/usuarios/pages/UsuariosPage';
import HelloPage from './features/api/pages/HelloPage';
import BolaoPage from './features/bolao/pages/BolaoPage';

function App() {
  return (
    <Routes>
      <Route path="/usuarios" element={<UsuariosPage />} />
      <Route path="/api/index" element={<HelloPage />} />
      <Route path="/bolao" element={<BolaoPage />} />
    </Routes>
  );
}

export default App;