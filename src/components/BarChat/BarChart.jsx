import React from 'react';
import { BarChart as BChart, Bar, XAxis, YAxis} from 'recharts';


const BarChart = () => {
    let studentSubjectData = [
        { name: "Alice", id: "001", mathMarks: 85, accountingMarks: 78, statisticsMarks: 82 },
        { name: "Bob", id: "002", mathMarks: 72, accountingMarks: 68, statisticsMarks: 75 },
        { name: "Charlie", id: "003", mathMarks: 90, accountingMarks: 85, statisticsMarks: 88 },
        { name: "David", id: "004", mathMarks: 68, accountingMarks: 70, statisticsMarks: 72 },
        { name: "Eva", id: "005", mathMarks: 78, accountingMarks: 76, statisticsMarks: 80 },
        { name: "Frank", id: "006", mathMarks: 95, accountingMarks: 92, statisticsMarks: 96 },
        { name: "Grace", id: "007", mathMarks: 81, accountingMarks: 85, statisticsMarks: 78 },
        { name: "Hannah", id: "008", mathMarks: 63, accountingMarks: 60, statisticsMarks: 65 },
        { name: "Ivan", id: "009", mathMarks: 88, accountingMarks: 84, statisticsMarks: 90 },
        { name: "Jessica", id: "010", mathMarks: 76, accountingMarks: 72, statisticsMarks: 78 }
    ];
    
    return (
        <div>
            <BChart width={850} height={190} data={studentSubjectData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='mathMarks' fill='skyblue'></Bar>
                <Bar dataKey='accountingMarks' fill='red'></Bar>
                <Bar dataKey='statisticsMarks' fill='gray'></Bar>
            </BChart>
        </div>
    );
};

export default BarChart;