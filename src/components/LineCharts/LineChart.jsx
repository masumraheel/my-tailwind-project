import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';


const LineChart = () => {
    const mathData = [
        { name: "Alice", id: 101, mathMarks: 85 },
        { name: "Bob", id: 102, mathMarks: 72 },
        { name: "Charlie", id: 103, mathMarks: 90 },
        { name: "David", id: 104, mathMarks: 68 },
        { name: "Emma", id: 105, mathMarks: 78 },
        { name: "Frank", id: 106, mathMarks: 95 },
        { name: "Grace", id: 107, mathMarks: 81 },
        { name: "Hannah", id: 108, mathMarks: 63 },
        { name: "Ian", id: 109, mathMarks: 88 },
        { name: "Jack", id: 110, mathMarks: 76 }
    ];
    
    return (
        <div className='mt-6'>
            <LChart width={550} height={200} data={mathData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;