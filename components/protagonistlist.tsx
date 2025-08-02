import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ProtagonistListProps {
    title: string;
    protagonists?: Protagonists[];
    classNames?: string;
}

const getSubjectColor = (subject: Subject): string => {
  const subjectColors: Record<Subject, string> = {
    Cinderella: "#E5D0FF",
    "Snow White": "#FFDA6E",
    Rapunzel: "#BDE7FF",
    "Sleeping Beauty": "#FFC8DD",
    "The Little Mermaid": "#C1F2FF",
    "Beauty and the Beast": "#FFD6A5",
  };

  return subjectColors[subject] || "#CCCCCC"; // default fallback
};

const ProtagonistList = ({ title, protagonists, classNames }: ProtagonistListProps) => {
    return (
        <article className={cn('protagonist-list', classNames)}>
            <h2 className="font-bold text-3xl">Recent Stories</h2>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-lg w-2/3">Stories</TableHead>
                    <TableHead className="text-lg text-right">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {protagonists?.map(({ id, subject, name, topic, duration }) => (
                    <TableRow key={id}>
                        <TableCell>
                            <Link href={`/protagonists/${id}`}>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-2xl">
                                            {name}
                                        </p>
                                        <p className="text-lg">
                                            {topic}
                                        </p>
                                    </div>
                                </div>   
                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 w-full justify-end">
                                <p className="text-2xl">
                                    {duration} {' '}
                                    <span className="max-md:hidden">mins</span>
                                </p>
                                <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="md:hidden" />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
            
        </article>
    )
}

export default ProtagonistList