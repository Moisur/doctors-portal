import { useEffect, useState } from "react";

const useToken = user => {
    const [tokenAccess, setToken] = useState('');
    useEffect(() => {
        if (user) {
            const email = (user?.user?.email);
            const userEmail = { email: email }
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        const TokenG = data.token
                        localStorage.setItem('accessToken', TokenG);
                        setToken(TokenG)
                    }


                })
        }
    }, [user])
    return [tokenAccess]
}
export default useToken;