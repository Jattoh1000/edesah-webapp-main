import { useEffect } from "react"
import { useAuth } from "../contex/AuthContext"
import {useNavigate} from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const {user} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if (!user || Object.keys(user).length == 0 || user == undefined || user == null) {
            navigate('/login', {replace: true})
        }
    }, [user, navigate])
    return children
}