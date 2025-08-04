import Image from "next/image"
import Link from "next/link"

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">
                Discover Your Fairy Tale Soul
            </div>
            <h2 className="text-3xl font-bold">
                Which Fairy Tale Are You Living?
            </h2>
            <p>
                Uncover your story through classic archetypes from timeless fairy tales—find out who you truly are, and what path lies ahead.
            </p>
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                <Link href="/protagonists/new">
                    <p>Reveal My Character</p>
                </Link>
            </button>
        </section>
    )
}

export default Cta