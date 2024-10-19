import React from 'react';
import '../scss/ShiftReport.scss';

const ShiftReport = () => {
  const shiftData = [
    {
      name: 'Shift 1',
      data: [
        { time: '08:00 - 12:00', productionCount: 120, targetProduction: 150 },
        { time: '12:00 - 16:00', productionCount: 150, targetProduction: 160 },
        { time: '16:00 - 20:00', productionCount: 130, targetProduction: 140 },
      ],
    },
    {
      name: 'Shift 2',
      data: [
        { time: '08:00 - 12:00', productionCount: 130, targetProduction: 140 },
        { time: '12:00 - 16:00', productionCount: 140, targetProduction: 160 },
        { time: '16:00 - 20:00', productionCount: 120, targetProduction: 130 },
      ],
    },
    {
      name: 'Shift 3',
      data: [
        { time: '08:00 - 12:00', productionCount: 110, targetProduction: 120 },
        { time: '12:00 - 16:00', productionCount: 125, targetProduction: 140 },
        { time: '16:00 - 20:00', productionCount: 135, targetProduction: 150 },
      ],
    },
  ];

  return (
    <div className="shift-report-card">
      <h2 className="shift-report-heading">Shift Report</h2>
      <div className="shifts-container">
        {shiftData.map((shift, index) => {
          const totalProduction = shift.data.reduce(
            (total, entry) => total + entry.productionCount,
            0
          );

          const totalTargetProduction = shift.data.reduce(
            (total, entry) => total + entry.targetProduction,
            0
          );

          return (
            <div className="shift-card" key={index}>
              <h3>{shift.name}</h3>
              <table className="shift-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Production Count</th>
                    <th>Target Count</th>
                  </tr>
                </thead>
                <tbody>
                  {shift.data.map((entry, entryIndex) => (
                    <tr key={entryIndex}>
                      <td>{entry.time}</td>
                      <td>{entry.productionCount}</td>
                      <td>{entry.targetProduction}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    
                    <td style={{ fontWeight: 'bold', color:  '#047BC4'}}>Total</td>
                   
                    <td style={{ fontWeight: 'bold', color: ' #047BC4' }}>{totalProduction}</td>
                    
                    <td style={{ fontWeight: 'bold', color: ' #047BC4' }}>{totalTargetProduction}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShiftReport;
