// app/components/LoginButton.tsx
"use client"

import { useRouter } from "next/navigation"

export default function LoginButton() {
    const router = useRouter()

    const handleLogin = () => {
        // ทำ Login Logic
        // ...

        // Redirect ไปหน้า Dashboard
        router.push("/dashboard")

        // หรือ Replace (ไม่เก็บใน History)
        // router.replace("/dashboard")

        // หรือ Refresh หน้าปัจจุบัน
        // router.refresh()
    }

    return (
        <button onClick={handleLogin}>
            เข้าสู่ระบบ
        </button>
    )
}