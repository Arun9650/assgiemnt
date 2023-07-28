import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function HeaderLink({ Icon, text, feed }) {
  const { data: session } = useSession();

  return (
    <div className=" flex flex-col justify-center items-center">
      <i className="h-3 w-3">
        <Image src={Icon} alt="asd" />
      </i>

      <h4
        className={`text-sm ${
          feed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {text}
      </h4>
    </div>
  );
}

export default HeaderLink;
