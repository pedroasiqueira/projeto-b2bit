import useInput from "../hooks/useInput"

function Login() {
  const email = useInput('');
  const password = useInput('');
  return (
    <>
      <form>
        <label>E-mail</label>
        <input
        type="email"
        placeholder="@gmail.com"
        value={ email.value }
        onChange={ email.onChange }
        />
        <label>Password</label>
        <input
        type="password"
        placeholder="****************"
        value={ password.value }
        onChange={ password.onChange }
        />
      </form>
      <button
      >
        Sign In
      </button>
    </>
  )
}

export default Login