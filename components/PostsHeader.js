import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Component({ title }) {
  let router = useRouter();
  
  return (
    <>
      <div className="my-2 flex items-center">
        <button onClick={() => router.back()}>
          <FaArrowLeft size={24}/>
        </button>
        <span className="text-lg font-bold ml-6 truncate">{title}</span>
      </div>
    </>
  )
};