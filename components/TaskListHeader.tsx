import styles from "./TaskListHeader.module.css";

type Props = {
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
};
export const TaskListHeader = (props: Props) => {
  const { headerHeight, rowWidth, fontFamily, fontSize } = props;
  return (
    <div className={styles.ganttTable}>
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2
        }}
      >
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth
          }}
        >
          &nbsp;Name
        </div>
      </div>
    </div>
  );
};
