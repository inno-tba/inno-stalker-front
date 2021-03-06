import React from 'react';
import { useEffect, useState } from 'react';

type ITargetsList = {
    id: number;
    targetName: string;
    distToUser: number;
    pointsForTask: number;
};

const TargetsList = () => {
    const [targetsList, setTargetsList] = useState<ITargetsList[]>([
        {
            id: 0,
            targetName: 'Daniil Gubaidullin',
            distToUser: 500,
            pointsForTask: 100,
        },
        {
            id: 1,
            targetName: 'Daniil Gubaidullin',
            distToUser: 500,
            pointsForTask: 100,
        },
        {
            id: 2,
            targetName: 'Daniil Gubaidullin',
            distToUser: 500,
            pointsForTask: 100,
        },
    ]);

    useEffect(() => {
        const updateTargetsList = () => {
            const updatedTargetsList: ITargetsList[] = [...targetsList];

            setTargetsList(updatedTargetsList);
        };

        updateTargetsList();
    }, [targetsList]);

    return (
        <div className='flex flex-col'>
            {targetsList.map((target) => (
                <div key={target.id} className='target flex border-2'>
                    <div className='target-info flex flex-col'>
                        <p>{target.targetName}</p>
                        <p>{target.distToUser}</p>
                    </div>
                    <p className='task-info'>{target.pointsForTask}</p>
                </div>
            ))}
        </div>
    );
};

export default TargetsList;
