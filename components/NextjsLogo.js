import { useState, useEffect } from "react";
import Image from "next/image";
import NextjsIcon from "../public/assets/nextjs-logo.svg";

export default function Component() {
  return (
    <>
      <div className="flex justify-center">
        <Image src={NextjsIcon} alt="" className="mt-24"></Image>
      </div>
    </>
  )
};