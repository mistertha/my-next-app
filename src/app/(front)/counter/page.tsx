"use client"

import { useState, useEffect } from "react"

// useEffect จะทำงานเอง 1 ครั้งตอน component render ครั้งแรก
// ถ้าใส่ [] จะทำงานเอง 1 ครั้งตอน component render ครั้งแรก
// ถ้าใส่ [count] จะทำงานเอง 1 ครั้งตอน component render ครั้งแรก และตอน count เปลี่ยน
// ถ้าไม่ใส่ [] จะทำงานเองทุกครั้งที่ component render
export default function Counter() {


    const [count, setCount] = useState(0)

    // auto counter every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count: number) => count + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Counter</h1>

            {/* arrow function () => {} */}
            <button onClick={() => setCount(count + 1)}
                className="border-2 rounded-lg bg-blue-300 p-2 text-white hover:bg-blue-500 cursor-pointer">
                เพิ่ม
            </button>
            <h2 className="text-4xl font-bold">{count}</h2>

            {/* arrow function () => {} */}
            <button onClick={() => setCount(count - 1)}
                className="border-2 rounded-lg bg-red-300 p-2 text-white hover:bg-red-500 cursor-pointer">
                ลด
            </button>
        </div>
    )
}