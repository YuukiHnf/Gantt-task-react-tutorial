import { Task } from "gantt-task-react";
import styles from "./task-list-table.module.css";

type Props = {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
};
export const TaskListTable = (props: Props) => {
  const {
    rowHeight,
    rowWidth,
    fontFamily,
    fontSize,
    locale,
    tasks,
    selectedTaskId,
    setSelectedTask
  } = props;
  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize
      }}
    >
      {tasks.map((t) => {
        let expanderSymbol = "";

        return (
          <div
            className={styles.taskListTableRow}
            style={{ height: rowHeight, padding: "0 auto" }}
            key={`${t.id}row`}
          >
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth
              }}
              title={t.name}
            >
              <div
                className={styles.taskListNameWrapper}
                // style={{ height: "100%" }}
              >
                <div style={{ height: "100%" }}>{t.name}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
