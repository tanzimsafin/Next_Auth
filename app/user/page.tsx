import { useSession } from "next-auth/react"


export default async  function User(){
    const { data: session, status } = useSession()
    return(
        <div>
             {status === "authenticated" ? "Signin in" : "Logout"}
      </div>  
    )
}