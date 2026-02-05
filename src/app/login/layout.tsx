// app/blog/layout.tsx

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}