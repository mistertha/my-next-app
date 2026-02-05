// app/docs/[...slug]/page.tsx
type Props = {
    params: Promise<{ slug: string[] }>
}

export default async function DocsPage({ params }: Props) {
    const { slug } = await params
    // URL: /docs/getting-started/installation
    // slug = ['getting-started', 'installation']

    return (
        <div>
            {slug ? (
                <p>Path: {slug.join(' > ')}</p>
            ) : (
                <p>ถ้าไม่มี slug จะแสดงหน้านี้</p>
            )}

        </div>
    )
}