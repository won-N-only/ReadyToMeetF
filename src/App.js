import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
// import ReservationDetail from './pages/Reservation/Detail';
// import ReservationCreate from './pages/Reservation/Create';
// import ReservationList from './pages/Reservation/List';
// import AccountRegister from './pages/Account/Register';
// import TermsPolicy from './pages/Policy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        {/* <Route path="/reservation/detail" element={<ReservationDetail />} /> */}
        {/* <Route path="/reservation/create" element={<ReservationCreate />} /> */}
        {/* <Route path="/reservation/list" element={<ReservationList />} /> */}
        {/* <Route path="/account/register" element={<AccountRegister />} /> */}
        {/* <Route path="/terms-policy" element={<TermsPolicy />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
