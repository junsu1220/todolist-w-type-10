export type CreateTodoRequestProps = {
  todo: string;
};

export type UpdateTodoRequestProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type deleteTodoRequestProps = {
  id: number;
};
