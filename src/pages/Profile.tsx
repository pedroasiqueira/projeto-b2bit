import { useEffect, useState } from "react"
import { fetchGet } from "./Api"
import { GetType } from "../types/typeGet"
import { useNavigate } from "react-router-dom"

function Profile() {
  const [profile, setProfile] = useState<GetType>()
  const navigate = useNavigate()

  useEffect(() => {
  const token = localStorage.getItem('token')
  if(!token){
    navigate('/')
  } else {
    const fetchData = async () => {
      await fetchGet(token)
      .then((data) => {
        setProfile(data)
        console.log(data)
      })
    }
    fetchData()
  }
  }, [])

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const imgg = profile?.avatar.image_low_url

  return (
    <>
      <main>
        <section>
          <p>Profile picture</p>
          <img src={imgg} alt={`foto de ${profile?.name}`} />
          <div>
            <p
            data-cy="name"
            >Your <strong>Name</strong></p>
            <span
            data-cy="name-user"
            >{profile?.name}</span>
            <p
            data-cy="email"
            >Your <strong>E-mail</strong></p>
            <span
            data-cy="email-user"
            >{profile?.email}</span>
          </div>
        </section>
      </main>
        <button
        data-cy="button-Log-Out"
        onClick={ handleClick }>
          Log Out
        </button>
    </>
  )
}

export default Profile