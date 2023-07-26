"use client";

import FormAddTask from "./components/FormAddTask";
import ListTask from "./components/ListTask";

export default function Home() {
  return (
    <main>
      <h1 className="text-center mb-12 text-4xl">To Do List App</h1>
      <FormAddTask />
      <ListTask />
    </main>
  );
}
