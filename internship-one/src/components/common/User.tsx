import React from 'react';
import Image from "next/image" // image from next
import { FaUserSecret } from "react-icons/fa6";

// type safety user prop

interface UserProps {
  marg?: string;
}

/**
 * User testimonial component.
 * @param {UserProps} props - Component props.
 * @returns {JSX.Element} - Rendered JSX element for the user testimonial.
 */

const User: React.FC<UserProps> = ({ marg }) => {
  return (
    <div
      className="bg-[#020817] border border-solid border-[#020800] w-[60%] h-auto rounded-xl p-4 flex items-start flex-col my-5"
      style={{ marginLeft: marg }}
    >
      <div className="w-full text-white flex justify-start mb-2">
        <FaUserSecret
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-semibold">User name</span>
          <span className="text-sm">Ritik</span>
        </div>
      </div>
      <div className="w-full text-white text-sm pb-5">
        Ut enim ad minim veniam, quis nostrud exercitation.
      </div>
    </div>
  );
}

export default User;
