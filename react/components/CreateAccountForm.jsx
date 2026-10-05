import { useState } from 'react';
import FormField from './FormField';

export default function CreateAccountForm({ onEnter }) {
  // These fields exist only while this component is displayed.
  const [account, setAccount] = useState({ name: '', email: '', login: '', password: '' });

  function updateField(field, value) {
    setAccount(current => ({ ...current, [field]: value }));
  }

  function handleEnter(event) {
    event.preventDefault();
    // Send only the values that the original login form needs to its parent.
    onEnter({ login: account.login, password: account.password });
  }

  return (
    <section className="signin-panel" aria-labelledby="account-heading">
      <p className="eyebrow mb-2">Make room for a new pal</p>
      <h2 className="signin-heading mb-4" id="account-heading">Create your account.</h2>
      <form className="create-account-form" onSubmit={handleEnter} noValidate>
        <FormField id="account-name" label="Name" value={account.name}
          onChange={value => updateField('name', value)} autoComplete="name" autoFocus />
        <FormField id="account-email" label="Email" type="email" value={account.email}
          onChange={value => updateField('email', value)} autoComplete="email" />
        <FormField id="account-login" label="Login" value={account.login}
          onChange={value => updateField('login', value)} autoComplete="username" />
        <FormField id="account-password" label="Password" type="password" value={account.password}
          onChange={value => updateField('password', value)} autoComplete="new-password" />
        <button className="btn btn-primary mt-2" type="submit">Enter</button>
      </form>
    </section>
  );
}
