import { useEffect, useState } from "react"
import { fetchGet } from "./Api"

function Profile() {
  const [profile, setProfile] = useState()

  useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('token')
    await fetchGet(token)
    .then((data) => {
      setProfile(data)
    })
  }
  fetchData()
  }, [])
  console.log(profile)

  return (
    <h1>Profile</h1>
  )
}

export default Profile