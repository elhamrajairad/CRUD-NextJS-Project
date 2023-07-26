import { render, fireEvent, screen } from "@testing-library/react";
import { Providers } from "@/app/redux/provider";
import configureStore from "redux-mock-store";
import {
  addTask,
  removeTask,
  editeTask,
  finishTask,
} from "@/app/redux/features/listSlice";
import SingleTask from "@/app/components/SignleTask";
import ListTask from "@/app/components/ListTask";
import FormAddTask from "@/app/components/FormAddTask";
// Create a mock store
const mockStore = configureStore([]);

describe("Your Redux Slice", () => {
  let store;

  beforeEach(() => {
    // Initialize the store with initial state
    store = mockStore({
      list: {
        list: [{ id: 1, name: "project todo list app", done: true }],
      },
    });
  });

  test("should add a task", () => {
    render(
      <Providers store={store}>
        <FormAddTask />
        <ListTask />
        <SingleTask />
      </Providers>
    );

    // Dispatch the addTask action
    store.dispatch(addTask("New Task"));

    // Assert that the task is added to the list
    expect(store.getActions()).toEqual([addTask("New Task")]);
  });

  test("should remove a task", () => {
    render(
      <Providers store={store}>
        <FormAddTask />
        <ListTask />
        <SingleTask />
      </Providers>
    );

    // Dispatch the removeTask action
    store.dispatch(removeTask(1));

    // Assert that the task is removed from the list
    expect(store.getActions()).toEqual([removeTask(1)]);
  });

  test("should edit a task", () => {
    render(
      <Providers store={store}>
        <FormAddTask />
        <ListTask />
        <SingleTask />{" "}
      </Providers>
    );

    // Dispatch the editeTask action
    store.dispatch(editeTask({ idItem: 1, content: "Updated Task" }));

    // Assert that the task is updated in the list
    expect(store.getActions()).toEqual([
      editeTask({ idItem: 1, content: "Updated Task" }),
    ]);
  });

  test("should finish a task", () => {
    render(
      <Providers store={store}>
        <FormAddTask />
        <ListTask />
        <SingleTask />
      </Providers>
    );

    // Dispatch the finishTask action
    store.dispatch(finishTask(1));

    // Assert that the task is finished in the list
    expect(store.getActions()).toEqual([finishTask(1)]);
  });
});
