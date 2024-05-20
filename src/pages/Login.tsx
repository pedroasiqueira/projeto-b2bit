import { FormEvent, useState } from "react";
import useInput from "../hooks/useInput"
import { fetchPost } from "./Api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
// import { detailError } from "../types/typePost";

function Login() {
  const email = useInput('');
  const password = useInput('');
  const [erro, setErro] = useState({ bol: false, typeErr: ''})
  const navigate = useNavigate() 

  const valEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valRegex = valEmail.test(email.value);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.value === '') {
      setErro({...erro, bol: true})
      setErro({...erro, typeErr: 'You forgot E-mail'})
    } else if (!valRegex) {
      setErro({...erro, bol: true})
      setErro({...erro, typeErr: 'Enter a valid E-mail'})
    } else if (password.value === '') {
      setErro({...erro, bol: true})
      setErro({...erro, typeErr: 'You forgot Password'})
    } else {
      await fetchPost(email.value, password.value)
      .then((data) => {
          localStorage.setItem('token', data.tokens.access);
          navigate('/Profile')
      })
      .catch((error: AxiosError) => {
      setErro({...erro, bol: true})
      setErro({...erro, typeErr: 'We cannot find an account with that email address or password'})
        console.log(error.response)
      })
    }
  }

  return (
    <>
      <form
      onSubmit={ handleSubmit }
      >
        <img className="logo-img" src="../../public/B2Bit Logo.png" alt="logo b2bit" />
        <label>E-mail</label>
        <input
        data-cy="email-input"
        type="email"
        placeholder="@gmail.com"
        value={ email.value }
        onChange={ email.onChange }
        />
        <label className="label">Password</label>
        <input
        data-cy="password-input"
        type="password"
        placeholder="****************"
        value={ password.value }
        onChange={ password.onChange }
        />
        {erro
          && (
            <span
            data-cy="error-message"
            className="error"
            >
            {erro.typeErr}
          </span>
          )}
          <button
          data-cy="sign-in-button"
          className="btn-login"
        >
          Sign In
        </button>
      </form>
    </>
  )
}

export default Login