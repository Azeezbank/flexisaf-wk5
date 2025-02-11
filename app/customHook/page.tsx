'use client';
import React from "react";
import useCustom from "./components/custom";
import Link from "next/link";

const Custom:React.FC  = () => {
    const [count, increament, decreament, clear] = useCustom(0)
    return (
        <>
        <h3>Counter: {count} </h3>
        <button type="button" onClick={increament}>Increament</button>
        <button type="button" onClick={decreament}>decreament</button>
        <button type="button" onClick={clear}>clear</button> <br/>
        <Link href="/useref"><button type="button" className="button">Back to useref</button></Link>
        </>
    )
}

export default Custom;