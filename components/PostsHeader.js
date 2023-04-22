import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Component({ title }) {
  let router = useRouter();
  
  return (
    <>
      <div className="flex items-center my-2 px-6">
        <button onClick={router.back}>
          <FaArrowLeft size={24}/>
        </button>
        <span className="font-bold ml-6 text-lg truncate">{title}</span>
      </div>
    </>
  )
};