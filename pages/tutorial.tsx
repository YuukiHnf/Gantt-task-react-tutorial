import React, { useState } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "../index.css";
import { getStartEndDateForProject, initTasks } from "../components/helpler";
import { TaskListTable } from "../components/TaskListTable";
import { TaskListHeader } from "../components/TaskListHeader";
import { TooltipContent } from "../components/TooltipContent";
let initalState: Task[] = [
  {
    start: new Date(2020, 1, 1, 12, 0),
    end: new Date(2020, 1, 1, 14, 0),
    name: "ステージ運営チーム",
    id: "ProjectSample",
    type: "project",
    progress: 0,
    hideChildren: false,
    displayOrder: 1,
    styles: {
      progressColor: "rgba(79, 173, 183, 1)",
      backgroundColor: "rgba(79, 173, 183, 1)",
      backgroundSelectedColor: "rgba(79, 173, 183, 1)",
      progressSelectedColor: "rgba(79, 173, 183, 1)"
    }
  },
  {
    start: new Date(2020, 1, 1, 12, 0),
    end: new Date(2020, 1, 1, 14, 0),
    name: "会場設営",
    id: "Task 0",
    type: "task",
    progress: 100,
    project: "ProjectSample"
  },
  {
    start: new Date(2020, 1, 1, 12, 0),
    end: new Date(2020, 1, 1, 14, 0),
    name: "受付",
    id: "Task 1",
    type: "task",
    progress: 100,
    project: "ProjectSample"
  }
];

const tutorial: React.FC = () => {
  // const [tasks, setTasks] = useState<Task[]>(initTasks());
  const [tasks, setTasks] = useState<Task[]>(initalState);
  // const [selectTask, setSelectID] = useState<Task | undefined>(undefined);

  const handleTaskChange = (task: Task) => {
    console.log("Change Date on ID:", +task);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      //もしprojectが変わるなら
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    console.log("setTask", newTasks);
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  const mode = ViewMode.Hour;

  return (
    <>
      <Gantt
        tasks={tasks}
        viewMode={mode}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        // onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        TaskListTable={TaskListTable}
        TaskListHeader={TaskListHeader}
        locale={"ja"}
        preStepsCount={1} //どっから表示するか
        handleWidth={15}
        barBackgroundColor={"rgba(0,0,0,0.42)"}
        barProgressColor={"rgba(79, 173, 183, 1)"} //通常の色
        barProgressSelectedColor={"#377980"} //選択された時
        barFill={60} //埋まり具合
        // barCornerRadius={16}
        TooltipContent={TooltipContent}
      />
    </>
  );
};

export default tutorial;
