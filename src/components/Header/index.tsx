import React from 'react';

function Header() {
  let daysStudying: number = 1;

  // paramater type and return type annotations
  function daysLeft(goalDate: number): number {
    let today = new Date().getDate();

    let days = goalDate - today;
    console.log(days);
    // a function whose declared type is neither 'void' nor 'any' must return a value
    return days;
  }
  daysLeft(19);

  // type annotation for an object type
  // must include array type ([] alone results in error; interpreted as must be an empty array)
  function printTask(task: { title: string, subtasks: string[] }) {
    console.log(task.title);
    task.subtasks.forEach(subtask => console.log("- " + subtask));
  };

  printTask(
    {
      title: "Grocery Shopping",
      subtasks: ["Trader Joes", "Sam's Club", "Kroger"]
    }
  )

  return (
    <header>
      <h1>TypeScript Intro</h1>
      <div>
        Days Studying: {daysStudying}
      </div>
    </header>
  )
}

export default Header;