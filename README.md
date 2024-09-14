<p align="center">
    <h1 align="center">TODO-MERN</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/HarshitAnchan/Todo-Mern?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/HarshitAnchan/Todo-Mern?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/HarshitAnchan/Todo-Mern?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/HarshitAnchan/Todo-Mern?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [🔖 Prerequisites](#-prerequisites)
  - [📦 Installation](#-installation)
  - [🤖 Usage](#-usage)
- [Usage](#usage)
  - [Adding a Task](#adding-a-task)
  - [Viewing Tasks](#viewing-tasks)
  - [Editing a Task](#editing-a-task)
  - [Deleting a Task](#deleting-a-task)
  - [Marking a Task as Completed](#marking-a-task-as-completed)
- [Code Structure](#code-structure)
  - [Backend (`server.js`)](#backend-serverjs)
    - [Routes:](#routes)
    - [Database:](#database)
  - [Frontend](#frontend)
    - [Components:](#components)
    - [State Management:](#state-management)
- [Key Decisions](#key-decisions)

---

## 📍 Overview

<code>This To-Do List application is a task management tool designed to help users organize their daily activities. Users can add, edit, view, and delete tasks. The app allows tracking of task status, setting deadlines, and provides a clean, intuitive user interface. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the app is scalable and ensures efficient data handling. Whether for personal task management or team collaboration, this app simplifies organizing to-dos and boosts productivity.
</code>

---

## 👾 Features

<code>
- **Task Creation**: Add new tasks with a title, description, status (pending/completed), and deadline.
- **Task Editing**: Update existing tasks to keep your to-do list current.
- **Task Deletion**: Remove tasks that are no longer needed.
- **Status Tracking**: Mark tasks as completed or pending to track progress.
- **Task Viewing**: View all tasks in an organized list, sorted by status or deadline.
- **Responsive UI**: Fully responsive interface built with React and Bootstrap for seamless usage on different devices.
- **Notifications**: Get real-time notifications for task creation, updates, and errors using `react-toastify`.
  </code>

---

## 📂 Repository Structure

```sh
└── Todo-Mern/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── components
        └── index.js
```

---

## 🚀 Getting Started

### 🔖 Prerequisites

**JavaScript**: `version x.y.z`

### 📦 Installation

Build the project from source:

1. Clone the Todo-Mern repository:

```sh
❯ git clone https://github.com/HarshitAnchan/Todo-Mern
```

2. Navigate to the project directory:

```sh
❯ cd todo-list-app

```

3. Navigate to the backend directory:

```sh
❯ cd backend

```

4. Install the required dependencies for the backend:

```sh
❯ npm install

```

5. Navigate to the frontend directory:

```sh
❯ cd ../frontend

```

6. Install the required dependencies for the frontend:

```sh
❯ npm install

```

### 🤖 Usage

Start the backend server:

```sh
❯ cd ../backend
❯ npm start

```

Start the frontend application:

```sh
❯ cd ../frontend
❯ npm start


```

## Usage

### Adding a Task

1. Navigate to the home page.
2. Enter the task title, description, status, and deadline.
3. Click "Add Task" to submit.

### Viewing Tasks

1. Navigate to the "View Tasks" page.
2. View all tasks in a table format with options to edit, delete, or mark as completed.

### Editing a Task

1. Click the "Edit" button next to the task you want to modify.
2. Update the fields and click "Save."

### Deleting a Task

1. Click the "Delete" button next to the task you want to remove.

### Marking a Task as Completed

1. Click the "Mark as Completed" button next to the task.

## Code Structure

### Backend (`server.js`)

#### Routes:

- **GET /getTodoList**: Fetch all tasks.
- **POST /addTodoList**: Add a new task.
- **POST /updateTodoList/:id**: Update an existing task by ID.
- **DELETE /deleteTodoList/:id**: Delete a task by ID.

#### Database:

- Uses Mongoose to interact with MongoDB.
- The `TodoList` schema includes task, description, status, and deadline.

### Frontend

#### Components:

- **Todo**: Allows users to add new tasks.
- **ViewTasks**: Displays tasks with options to edit, delete, or mark as completed.

#### State Management:

- Uses React's `useState` and `useEffect` hooks for managing state and side effects.
- `axios` is used for API requests.

## Key Decisions

- **Data Validation**: Ensured all fields are required when adding or editing tasks to maintain data integrity.
- **User Feedback**: Integrated `react-toastify` for user notifications on success or error messages.
- **Date Handling**: Managed deadline dates using `datetime-local` for input and formatted dates for display.
