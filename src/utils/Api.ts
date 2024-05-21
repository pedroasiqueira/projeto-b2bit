import axios from "axios";

export const fetchPost = async (email: string, password: string) => {
    const {data} = await axios.post('https://api.homologation.cliqdrive.com.br/auth/login/', {
      email: email,
      password: password,
    }, {
      headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
      }
    }
    )
    return data
}

export const fetchGet = async (token: string | null) => {
  const {data} = await axios.get('https://api.homologation.cliqdrive.com.br/auth/profile/', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web',
    }
  })
  return data
}