declare module "uiTypes" {

  export type Status = "idle" | "pending" | "fulfilled" | "rejected";

  export interface Task {
    id?:any;
    firebaseId?:string;
    title: string;
    dueDate?: Date | string;
    done: boolean;
    position?: number;
    column?: number;
  }

  export interface TasksState {
    id: number;
    title : string;
    cards: Task[];
  }

  export interface kanbanSource {
    fromColumnId: number;
    fromPosition: number;
  }

  export interface kanbanDestination {
    toColumnId: number;
    toPosition: number;
  }
};

declare module '@lourenci/react-kanban';
