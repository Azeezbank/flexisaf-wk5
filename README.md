# React Hook Assignment
This assignment demeponstrate the use of essential **React Hooks**
- `useState` - for managing component state.
- `useEffect` - for handlinh side effecs like updating the page title.
- `useRef` - for interacting with DOM element.
**Custom Hook** - for reuseability in managing state logic.

1. ## **`useState` - for managing component state in react.**
jsx
'use client';
import React, {useState} from "react";

const Custom:React.FC  = () => {
    const [count, setCount] = useCustom(0);
    const Increament = () => setCount(count + 1);
    const decreament = () => setCount(count - 1);
    const clear = () => setCount(0);

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

2. ## useEffect runs code after a component renders. Here it updates the document title when the counter chages
`"use client"

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
}`

3. ## useRef allow us to reference and modify a DOM element without causing re-renders.
`"use client";
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

export default Useref;`

4. ## Custom hook is a function that starts  with `use` and **reuses logic** across components.
## custom hook
"use client"
import { useState } from "react"


type UseCustomReturnType = [number, () => void, () => void, () => void];

const useCustomHook = (initial = 0): UseCustomReturnType => {
    const [count, setCount] = useState<number>(initial);

    const increament = () => setCount(count + 1);
    const decreament = () => setCount(count - 1);
    const clear = () => setCount(0);

    return [count, increament, decreament, clear]
}

export default useCustomHook;

## Using the useCustomHook
``'use client';
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

export default Custom;``