import AddTask from "@/components/AddTask";
import ListTask from "@/components/ListTask";
import TaskList from "@/components/ListTask";
import { TaskContextProvider } from "@/context/TaskContext";

export default function Home() {
    return(
        <main className="h-screen">
            <h1 className="text-2xl sm:text4xl font-black traking-wide text-center pt-6 pb-10 sm:pb-24">Gestor de tarefas</h1>

            <div className="grid place-items-center">
                <TaskContextProvider>
                    <ListTask />
                    <AddTask />
                </TaskContextProvider>
            </div>
            
        </main>
    );
}