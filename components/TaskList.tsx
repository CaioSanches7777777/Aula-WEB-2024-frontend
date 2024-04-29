import AddTask from "./AddTask";

const TaskList = ({}) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-14">
                <h2 className="text-2xl font-semibold">My Tasks</h2>
            </div>

            <AddTask />
        </div>
    );
};

export default TaskList;