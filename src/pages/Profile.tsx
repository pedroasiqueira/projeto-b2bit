import { useEffect, useState } from "react"
import { fetchGet } from "./Api"
import { GetType } from "../types/typeGet"
import { useNavigate } from "react-router-dom"

function Profile() {
  const [profile, setProfile] = useState<GetType>()
  const navigate = useNavigate()

  useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('token')
    await fetchGet(token)
    .then((data) => {
      setProfile(data)
      console.log(data)
    })
  }
  fetchData()
  }, [])

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const imgg = profile?.avatar.image_low_url

  return (
    <>
      <h1>{profile?.name}</h1>
      <main>
        <img src={imgg} alt={`foto de ${profile?.name}`} />
        <button
        onClick={ handleClick }>
          Log Out
        </button>
      </main>
    </>
  )
}

export default Profile