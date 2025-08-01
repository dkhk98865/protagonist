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


interface ProtagonistListProps {
    title: string;
    protagonists?: Protagonists[];
    classNames?: string;
}

const ProtagonistList = ({ title, protagonists, classNames }: ProtagonistListProps) => {
    return (
        <article className={cn('protagonist-list', classNames)}>
            <h2 className="font-bold text-3xl">Recent Stories</h2>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-lg w-2/3">Stories</TableHead>
                    <TableHead className="text-lg">Type</TableHead>
                    <TableHead className="text-lg text-right">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {protagonists?.map(({ id, subject, name, topic, duration }) => (
                    <TableRow key={id}>
                        <TableCell>
                            <Link href={`/protagonists/${id}`}>
                                    {subject}    
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
            
        </article>
    )
}

export default ProtagonistList