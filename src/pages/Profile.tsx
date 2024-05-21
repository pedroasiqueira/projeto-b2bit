import { useEffect, useState } from "react"
import { fetchGet } from "../utils/Api"
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

  const imgg = profile?.avatar.low

  return (
    <>
      <header>
          <button
            data-cy="button-Log-Out"
            className="btn btn-logout"
            onClick={ handleClick }>
              Log Out
          </button>
        </header>
      <main>
        <section className="profile-container">
          <p className="img-text">Profile picture</p>
          <img src={imgg} alt={`foto de ${profile?.name}`} className="img-element" />
          <div className="user-details">
            <p
            data-cy="name"
            className="p-title"
            >Your <strong>Name</strong></p>
            <p
            data-cy="name-user"
            className="p-details"
            >{profile?.name}</p>
            <p
            data-cy="email"
            className="p-title"
            >Your <strong>E-mail</strong></p>
            <p
            data-cy="email-user"
            className="p-details"
            >{profile?.email}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile