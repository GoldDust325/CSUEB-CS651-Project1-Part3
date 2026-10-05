import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import CreateAccountForm from './components/CreateAccountForm';
import '../css/signin.css';

export default function SignIn() {
  // Controlled inputs keep the login and password in React state.
  const [credentials, setCredentials] = useState({ login: '', password: '' });
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [message, setMessage] = useState('');
  const loginInput = useRef(null);

  function updateCredentials(field, value) {
    setCredentials(current => ({ ...current, [field]: value }));
    setMessage('');
  }

  function createAccount(newCredentials) {
    // Enter copies the new values into the ORIGINAL form, then hides the new form.
    setCredentials(newCredentials);
    setShowAccountForm(false);
    setMessage('Your demo login and password are filled in. Select Submit to try signing in.');
    loginInput.current.focus();
  }

  return (
    <>
      <Navbar currentPage="Sign In" />
      <main id="main-content" className="page-content container signin-workspace">
        <header className="row align-items-center g-4 mb-4">
          <div className="col-12">
            <p className="eyebrow">Your PlatePal account</p>
            <h1>Welcome to the table.</h1>
            <p className="lead mt-3">A place for your meals, your goals, and your companion.</p>
          </div>
        </header>

        {/* The original login form stays on the left; Bootstrap stacks forms on mobile. */}
        <div className="row g-4 align-items-start">
          <div className="col-md-6">
            <LoginForm values={credentials} onChange={updateCredentials}
              onSubmit={() => setMessage('Demo sign-in complete. Explore the App to try a sample meal.')}
              onCreateAccount={() => { setShowAccountForm(true); setMessage(''); }}
              showAccountForm={showAccountForm} loginInput={loginInput} />
            <p className="signin-status mt-3 mb-0" role="status" aria-atomic="true">{message}</p>
          </div>
          <div className="col-md-6">
            {/* Conditional rendering removes every account-form field after Enter. */}
            {showAccountForm ? (
              <CreateAccountForm onEnter={createAccount} />
            ) : (
              <aside className="signin-invitation" aria-labelledby="invitation-heading">
                <p className="eyebrow mb-2">Pull up a chair</p>
                <h2 className="signin-heading" id="invitation-heading">A pal for every plate.</h2>
                <p>New here? Select Create Account to get started or just hang out and we can cook later.</p>
                <a href="./app.html">Explore the App</a>
              </aside>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
