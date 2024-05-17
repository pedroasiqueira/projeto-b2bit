import { FormEvent } from "react";
import useInput from "../hooks/useInput"
import { fetchPost } from "./Api";
import { AxiosError, HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const email = useInput('cliente@youdrive.com');
  const password = useInput('password');
  const navigate = useNavigate()

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetchPost(email.value, password.value)
    .then((data) => {
      if (data.tokens) {
        localStorage.setItem('token', data.tokens.access);
        navigate('/Profile')
      } else {
        return data
      }
    })
    .catch((error: AxiosError) => {
      alert(error.response?.data?.detail)
      // if (error.response?.status === HttpStatusCode.Unauthorized) {}
    })
  }

  return (
    <>
      <form
      onSubmit={ handleSubmit }
      >
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
        <button
        >
          Sign In
        </button>
      </form>
    </>
  )
}

export default Login