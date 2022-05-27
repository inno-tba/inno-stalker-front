import React from 'react';
import { useEffect } from 'react';
import { TargetsList } from '../../components';

const TasksPage = () => {
    useEffect(() => {
        document.title = 'Tasks';
    }, []);

    return (
        <div className='tasks'>
            <TargetsList />
        </div>
    );
};

export default TasksPage;
