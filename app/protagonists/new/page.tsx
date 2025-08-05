import { auth } from "@clerk/nextjs/server";
import ProtagonistForm from "@/components/protagonistform"
import { redirect } from "next/navigation";

const NewProtagonist = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1>Protagonist Builder</h1>

                <ProtagonistForm />
            </article>
        </main>
    )
}

export default NewProtagonist