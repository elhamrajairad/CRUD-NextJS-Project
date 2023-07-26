import { useAppSelector } from "@/app/redux/hooks";
import SignleTask from "./SignleTask";
// This component renders a list of tasks using the useAppSelector hook to retrieve the task list from the Redux store.
// Each task is rendered as a SingleTask component, with its name, id, and a line-through styling if the task is marked as done.
export default function ListTask() {
  const tasks = useAppSelector((state) => {
    return state.list.list;
  });
  let renderTasks = tasks.map((task) => {
    return (
      <SignleTask
        name={task.name}
        id={task.id}
        key={task.id}
        line={`${task.done == true ? "line-through" : ""}`}
      />
    );
  });

  return <div>{renderTasks}</div>;
}
