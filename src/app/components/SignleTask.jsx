"use client";
import { removeTask, finishTask, editeTask } from "../redux/features/listSlice";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { useState } from "react";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// This component is a functional component called "SingleTask" that represents a single task item in a to-do list. It receives props such as name, id, and line to display the task details.
// This section of code appears to be defining several event handler functions used in a React component. Here's a breakdown of each function:

// handlerRemoveTask: This function is called when a task needs to be removed. It dispatches an action called removeTask with the provided id as a parameter.

// handerDoneTask: This function is called when a task is marked as done. It dispatches an action called finishTask with the provided id as a parameter.

// handlerToggleEditeForm: This function is called when the edit form for a task needs to be toggled. It updates the state variable edite by setting its toggle property to the opposite value and assigns the provided id to its idItem property.

// handlerEditeTask: This function is called when a task needs to be edited. It retrieves the new value from the data object, extracts the content property, and the idItem from the edite state variable. It then dispatches an action called editeTask with the content and idItem as parameters. Finally, it sets the toggle property of the edite state variable to false.

export default function SignleTask({ name, id, line }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [edite, setEdite] = useState({
    toggle: false,
    idItem: "",
  });
  const dispatch = useAppDispatch();
  const handlerRemoveTask = (id) => {
    dispatch(removeTask(id));
  };
  const handerDoneTask = (id) => {
    dispatch(finishTask(id));
  };
  const handlerToggleEditeForm = (id) => {
    setEdite({
      toggle: !edite.toggle,
      idItem: id,
    });
  };
  const handlerEditeTask = (data) => {
    const content = data.newValue;
    const idItem = edite.idItem;
    dispatch(editeTask({ content, idItem }));
    setEdite({ toggle: false });
  };
  return (
    <div className="w-4/5 mx-auto mt-12 shadow-lg border py-3 rounded-md">
      <li
        className="flex flex-row justify-around gap-4 align-middle"
        data-testid="list-item"
      >
        <Checkbox
          color="secondary"
          type="checkbox"
          onChange={() => handerDoneTask(id)}
          labelPlacement="start"
          checked={line ? true : false}
        />
        <strong className={`self-center ${line ? "line-through" : ""}`}>
          {name}
        </strong>
        <section className="ml-auto">
          <IconButton onClick={() => handlerRemoveTask(id)}>
            <DeleteIcon color="secondary" />
          </IconButton>
          <IconButton
            onClick={() => handlerToggleEditeForm(id)}
            data-testid="toggle-btn"
          >
            <EditIcon color="secondary" />
          </IconButton>
        </section>
      </li>
      {edite.toggle && (
        <form
          onSubmit={handleSubmit(handlerEditeTask)}
          className="flex flex-row justify-between align-middle m-8"
          data-testid="form-edite"
        >
          <TextField
            type="text"
            placeholder="new-value"
            {...register("newValue")}
            className="w-1/2"
            color="secondary"
            variant="standard"
          />
          <Button
            type="submit"
            variant="outlined"
            size="small"
            color="secondary"
            data-testid="save-data"
          >
            Save
          </Button>
        </form>
      )}
    </div>
  );
}
