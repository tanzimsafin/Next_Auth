"use client"
// use default Signin and out button given by the next js default 
import { SessionProvider, useSession } from "next-auth/react"
export default  function Home(){
  return(<SessionProvider>
     <Comp />
    </SessionProvider>)
  
}

export  function Comp(){
    const { data: session, status } = useSession()
    return(
        <div>
             {status === "authenticated" ? "Signin in" : "Logout"}
      </div>  
    )
}