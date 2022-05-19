import { useEffect, useState } from "react"

const AdminHook = (user) => {
    const [Admin, setAdmin] = useState(false)
    const [AdminLod,setAdminLod]=useState(true)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/admin/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)
                    setAdminLod(false)
                })
        }
    }, [user])
    return[Admin,AdminLod]
}
export default AdminHook;