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
  // if you don't specify a type for properties , it will be assumed to be 'any'
  // ? after the property name denotes an optional property
  function printTask(task: { title: string, subtasks?: string[] }) {
    console.log(task.title);
    if (task.subtasks !== undefined) {
      task.subtasks.forEach(subtask => console.log("- " + subtask));
    }
    
  };
  printTask(
    {
      title: "Grocery Shopping",
      subtasks: ["Trader Joes", "Sam's Club", "Kroger"]
    }
  )

  // Union Type - formed from two or more other types (referred to as members)
  // represent values that may be any one of those types
  // typescript will only allow an operation if it is valid for every member of the union
    // we cannot perform string or number specific operations in this function without first
    // 'narrowing' the union (conditional statements to run different operations on each member)
  function printAge(age: number | string) {
    console.log("Your age is: " + age);
  }
  printAge(26);
  printAge("twenty six");
  printAge(26 + " years old")

  // Type Aliases - a name for any type (to use the same type more than once and refer to it by a certain name)
  // Interface declaration - another way to name an object type (replace 'type' keyword with 'interface')
  // (Type cannot be re-opened to add new properties VS an interface is always extendable)
  type Task = {
    title: string;
    subtasks?: string[];
  }
  interface Person {
    name: string;
    age: number;
  }
  interface Parent extends Person {
    children: string[];
    married: boolean;
  }
  
  type Age = number | string;

  function printInfo(task: Task, age: Age, parent: Parent) {
    console.log(task.title);
    if (task.subtasks !== undefined) {
      task.subtasks.forEach(subtask => {
        console.log("-" + subtask);
      });
    }
    console.log(parent.name + ", you better hurry! You are already " + age + ", ... running low on time.")
  }
  printInfo(
    {
      title: "Grocery Shopping",
      subtasks: ["Trader Joes", "Sam's Club", "Kroger"]
    },
    36, 
    {
      name: "Jessica",
      age: 36,
      children: ["brandon", "carly"],
      married: true
    }
  );
  printInfo(
    {
      title: "Get the laundry done",
      subtasks: []
    },
    "twenty nine",
    {
      name: "Brianna",
      age: 29,
      children: ["Alyssa"],
      married: false
    }
  );

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