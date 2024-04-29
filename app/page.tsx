import TaskList from "@/components/TaskList";

export default function Home() {
    return(
        <main className="h-screen">
            <h1 className="text-2xl sm:text4xl font-black traking-wide text-center pt-6 pb-10 sm:pb-24">Gestor de tarefas</h1>

            <div className="grid place-items-center">
                <TaskList />
            </div>
        </main>
    );
}