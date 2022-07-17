## Hello Gantt-task-react-tutorial

- create by codesandbox @ https://codesandbox.io/s/gantt-task-react-tutorial-ieuhrg?file=/README.md

## 1.やったこと

- gantt-task-react(https://github.com/MaTeMaTuK/gantt-task-react)のチュートリアルとして簡単な実装を行なった。

  > **Note** fot tips
  >
  > - Disable で固定
  > - Project を合わせないと値は反応しない
  > - onChangeDate がないと変更するためのツールが出てこない
  > - TooltipContent, TaskListHeader, TaskListTable で中身を動かすことができる。困ったら、元々のコード https://github.com/MaTeMaTuK/gantt-task-react/blob/main/src/components/task-list/task-list-header.tsx を参考にする
  > - 色は変えられるけど Style はいじれない（いじりたかった,,,

## 2.気付き

- めちゃくちゃ優秀
- ただ以下のような残念なところがある
  > **Warning**
  >
  > - 一つの row に複数の中身を入れることはできない....（たくさんの人が issue にあげてる,,,
  > - tooltip の発火は hover のみっぽい？
