import React, { Component } from 'react';

import { defaultTasks, Task } from './task';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
    tasks: Task[];
}

class WithState extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tasks: defaultTasks,
        };
    }

    toggle(id: string): void {
        const index = this.state.tasks.findIndex((task) => task.id === id);
        if (index < 0) return;
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task, i) =>
                i === index ? { ...task, checked: !task.checked } : task
            ),
        }));
    }

    render(): JSX.Element {
        return (
            <ul>
                {this.state.tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            defaultChecked={task.checked}
                            onChange={() => this.toggle(task.id)}
                        />
                        {task.content}
                    </li>
                ))}
            </ul>
        );
    }
}

export default WithState;
