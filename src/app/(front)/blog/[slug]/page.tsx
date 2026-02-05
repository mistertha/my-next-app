// app/blog/[slug]/page.tsx


type Props = {

    params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params

    // แปลง url ที่เป็นภาษาไทย
    const decodedSlug = decodeURIComponent(slug)


    return (
        <article className="p-8">
            <h1 className="text-3xl font-bold">
                บทความ: {decodedSlug}
            </h1>
        </article>
    )
}