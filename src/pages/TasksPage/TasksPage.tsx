import { useEffect } from 'react';

const TasksPage = () => {
    useEffect(() => {
        document.title = 'Tasks';
    }, []);

    return <div>Tasks</div>;
};

export default TasksPage;
