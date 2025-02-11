"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Useref = () => {
    const buttonRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, []);
    return (
        <>
        <input ref={buttonRef} type="text"placeholder="Type here" />
        <input aria-label="text" type="text" /> <br/>
        <Link href={"/"}> <button type="button" className="button">Back to Home </button></Link> <br />
        <Link href={'/customHook'}> <button type="button" className="button">To custome hook</button></Link>
        </>
    )
}

export default Useref;