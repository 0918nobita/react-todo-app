export interface Task {
    id: string;
    checked: boolean;
    content: string;
}

export const defaultTasks: Task[] = [
    { id: 'foo', content: 'First', checked: false },
    { id: 'bar', content: 'Second', checked: true },
];
