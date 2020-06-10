import React, { useState } from 'react';

import { defaultTasks, Task } from './task';

const WithHooks: React.FC = () => {
    const [tasks] = useState<Task[]>(defaultTasks);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input type="checkbox" defaultChecked={task.checked} />
                    {task.content}
                </li>
            ))}
        </ul>
    );
};

export default WithHooks;
