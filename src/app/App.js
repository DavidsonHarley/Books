import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import classNames from 'classnames';
import './styles/index.scss';
import Navbar from './widgets/Navbar/ui/Navbar';

const MainPage = lazy(() => import('./pages/MainPage/ui/MainPage'));

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
