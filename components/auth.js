import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react";

export default function Component() {
  const { data: session } = useSession()
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }
  if (session) {
    return (
      <>
      <br />
      <Image src={session.user.image} alt="adf" width={50} height={50} className="rounded-full cursor-pointer" onClick={handleToggle} />
      <div onClick={() => signOut()} className={` ${toggle ? 'flex' : 'hidden'}` }>
          Log Out 
      </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}