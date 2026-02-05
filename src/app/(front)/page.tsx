import React from "react"
import Image from "next/image"

// app/page.tsx (Server Component - ค่าเริ่มต้น)
async function getUsers() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()

}
// ประกาศ async function สำหรับการดึงข้อมูล
export default async function Page() {
  // await คือการรอให้ฟังก์ชัน getUsers ทำงานเสร็จก่อน
  const users = await getUsers()
  // users คือข้อมูลที่ได้จากฟังก์ชัน getUsers

  console.log(users)



  return (
    <>
      <div className="p-8">
        <Image
          src="https://www.easykost.com/wp-content/uploads/2022/07/demo.jpeg"
          alt="demo"
          width={400}
          height={400}
          loading="eager"
          style={{ width: '400px', height: 'auto' }}
          className="rounded-lg shadow-lg"
        />
        <h1 className="text-3xl font-bold underline">รายชื่อผู้ใช้งาน</h1>
        <ul className="list-disc pl-5">
          {users.map((user: any) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  )

}