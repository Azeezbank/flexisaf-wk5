"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Home page`;
      if (count <= 10) {
        setCount(count + 1)
      }
    });

  return (
    <>
    <h1>Welcome to week five FLEXISAF assignment</h1>
    <h2>useEffect</h2>

    <h3>Counter: {count}</h3>
    <Link href="/useref"> <button type="button" className="button">Useref page</button></Link>
    </>
  )
}