import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <br />
      <Image src={session.user.image} alt="adf" width={50} height={50} className="rounded-full"  />
     
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