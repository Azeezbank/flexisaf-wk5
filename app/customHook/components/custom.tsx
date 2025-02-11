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