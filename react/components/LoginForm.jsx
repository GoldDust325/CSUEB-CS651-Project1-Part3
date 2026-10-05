import FormField from './FormField';

export default function LoginForm({ values, onChange, onSubmit, onCreateAccount,
  showAccountForm, loginInput }) {
  function handleSubmit(event) {
    // Submit is a frontend demo; keep the visitor on this page.
    event.preventDefault();
    onSubmit();
  }

  return (
    <section className="signin-panel" aria-labelledby="login-heading">
      <p className="eyebrow mb-2">Your seat at the table</p>
      <h2 className="signin-heading mb-4" id="login-heading">Sign in.</h2>
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <FormField id="signin-login" label="Login" value={values.login}
          onChange={value => onChange('login', value)} autoComplete="username" inputRef={loginInput} />
        <FormField id="signin-password" label="Password" type="password" value={values.password}
          onChange={value => onChange('password', value)} autoComplete="current-password" />
        <div className="d-flex flex-wrap gap-2 mt-4">
          <button className="btn btn-primary" type="submit">Submit</button>
          <button className="btn btn-outline-primary" type="button"
            aria-expanded={showAccountForm} onClick={onCreateAccount}>Create Account</button>
        </div>
      </form>
    </section>
  );
}
