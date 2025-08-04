import Image from "next/image";
import Link from "next/link";

interface ProtagonistCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const ProtagonistCard = ({ id, name, topic, subject, duration, color }: ProtagonistCardProps) => {
    return (
        <article className="protagonist-card" style={{ backgroundColor: color}}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="protagonist-bookmark">
                    <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
                </button>
            </div>

            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex item-center gap-2">
                <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
                <p className="textsm">{duration} minutes</p>
            </div>
            <Link href={`/protagonist/${id}`} className="w-full">
                <button className="btn-primary w-full justify-centere"> 
                    Launch Story
                </button>
            </Link>
        </article>
    )
}

export default ProtagonistCard