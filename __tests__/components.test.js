import { render, screen, fireEvent } from "@testing-library/react";
import { Providers } from "@/app/redux/provider";
import { store } from "@/app/redux/store";
import FormAddTask from "@/app/components/FormAddTask";
import ListTask from "@/app/components/ListTask";

describe("test FormAddTask Componet", () => {
  test("test render and event handler element to DOM", () => {
    render(
      <Providers store={store}>
        <FormAddTask />
      </Providers>
    );
    const btn = screen.getByTestId("button");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    const taskInput = screen.getByTestId("field-task");
    expect(taskInput).toBeInTheDocument();
    fireEvent.change(taskInput);
  });
});

describe("test ListTask component", () => {
  it("test render and event handler element to DOM", () => {
    render(
      <Providers store={store}>
        <ListTask />
      </Providers>
    );
    const list = screen.getByTestId("list-item");
    expect(list).toBeInTheDocument();
    const lists = screen.getAllByTestId("list-item");
    expect(lists.length).toEqual(1);

    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(toggleBtn).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    const formEdite = screen.getByTestId("form-edite");
    expect(formEdite).toBeVisible();
    const saveBtn = screen.getByTestId("save-data");

    fireEvent.click(toggleBtn);
    expect(saveBtn).not.toBeVisible();
  });
});
