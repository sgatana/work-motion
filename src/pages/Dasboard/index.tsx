import { Dashboard } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
