import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import OnConstruction from './pages/OnConstruction'
import ReservationCreatePage from './pages/Reservation/Create';
import ReservationListPage from './pages/Reservation/List';
// import ReservationDetail from './pages/Reservation/Detail';
// import AccountRegister from './pages/Account/Register';
// import TermsPolicy from './pages/Policy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/OnConstruction" element={<OnConstruction />} />
        <Route path="/ReservationCreatePage" element={<ReservationCreatePage />} />
        <Route path="/ReservationListPage" element={<ReservationListPage />} />
        {/* <Route path="/Reservation/detail" element={<ReservationDetail />} /> */}
        {/* <Route path="/account/register" element={<AccountRegister />} /> */}
        {/* <Route path="/terms-policy" element={<TermsPolicy />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
