import { useState, useEffect } from "react"
const [data, setData] = useState("")
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")


export function Home(){
    const navigate = useNavigate()
    return(
        <>
<

     
        </>
    )
}
export function ProtectedRoute(){
    const isAuthenticated = true
    if(!isAuthenticated){
        Navigate('/login')
    }
    return <Outlet/>
    
 }

<Route element={<ProtectedRoute />}>
<Route path="/employess" element={<Employess/>}>
<Route path="/reports" element={<Reports/>}></Route>

<Route/>