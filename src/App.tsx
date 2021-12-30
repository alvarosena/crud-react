import { UsersTable } from './components/UsersTable/index';
import { SignUp } from './components/SignUp';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export { App };
