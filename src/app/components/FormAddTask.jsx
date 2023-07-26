import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/app/redux/hooks";
import { addTask } from "../redux/features/listSlice";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// This component is a form for adding tasks. It utilizes the Redux store and dispatches an action to add a task when the form is submitted. The form itself consists of a text field for entering the task description and a button to submit the form.

// The useAppDispatch hook is used to get the dispatch function from the Redux store, allowing the component to dispatch actions. The useForm hook from a form library (possibly React Hook Form) is used to handle form validation and submission.

// The handlerAddTask function is called when the form is submitted. It dispatches the addTask action with the task data obtained from the form, and then resets the form using the reset function.
export default function FormAddTask() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handlerAddTask = (data) => {
    dispatch(addTask(data.task));
    reset();
  };
  return (
    <div className="text-center">
      <form
        onSubmit={handleSubmit(handlerAddTask)}
        className="flex flex-row justify-center align-middle gap-4"
        data-testid="form-task"
      >
        <TextField
          autoFocus
          color="secondary"
          type="text"
          label="new task"
          variant="outlined"
          {...register("task")}
          className="mr-8 w-1/2"
          required
          data-testid="field-task"
        />
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          size="small"
          className="px-8"
          data-testid="button"
        >
          ADD
        </Button>
      </form>
    </div>
  );
}
