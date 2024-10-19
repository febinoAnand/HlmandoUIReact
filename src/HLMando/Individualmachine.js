import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const formatTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const calculateEndTime = (startTime) => {
  const start = new Date(startTime);
  const end = new Date(start.getTime() + 8 * 60 * 60 * 1000);
  return `${formatTime(start)} - ${formatTime(end)}`;
};

const Machine = () => {
  const location = useLocation();
  const { state } = location;
  const { machineId, status } = state || { machineId: null };

  // Mock data
  const mockMachineData = {
    machine_name: "Machines",
    shifts: [
      {
        shift_start_time: "2024-10-14T08:00:00Z",
        shift_name: "Shift 1",
        shift_no: 1,
        timing: {
          "08:00 - 09:00": { actual_production: 100, target_production: 150 },
          "09:00 - 10:00": { actual_production: 120, target_production: 130 },
        },
      },
      {
        shift_start_time: "2024-10-14T16:00:00Z",
        shift_name: "Shift 2",
        shift_no: 2,
        timing: {
          "16:00 - 17:00": { actual_production: 90, target_production: 140 },
          "17:00 - 18:00": { actual_production: 80, target_production: 120 },
        },
      },
    ],
    latest_production_count: 200,
  };

  const [machine, setMachine] = useState(mockMachineData);
  const [Machinestatus, setStatus] = useState(status);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const filteredShifts = machine.shifts.filter((shift) => shift.timing && Object.keys(shift.timing).length > 0);

  const latestShift = filteredShifts.reduce((latest, shift) => {
    const shiftTime = new Date(shift.shift_start_time);
    return shiftTime > latest ? shiftTime : latest;
  }, new Date(0));

  const latestShiftData = filteredShifts.find((shift) => {
    const shiftTime = new Date(shift.shift_start_time);
    return shiftTime.getTime() === latestShift.getTime();
  });

  const totalProductionCountCurrentShift = latestShiftData
    ? Object.values(latestShiftData.timing).reduce(
        (total, current) => total + (current.actual_production || 0),
        0
      )
    : 'N/A';

  const totalProductionCountAllShifts = filteredShifts.length
    ? filteredShifts.reduce((total, shift) => {
        return (
          total +
          Object.values(shift.timing).reduce(
            (shiftTotal, current) => shiftTotal + (current.actual_production || 0),
            0
          )
        );
      }, 0)
    : 'N/A';

  const getStatusColor = (status) => {
    if (status === 1) return '#f61612';
    if (status === 0) return '#4ded4f';
    return 'yellow';
  };

  return (
    <div className="page" style={styles.page}>
      {/* Machine Card */}
      <div className="machine-card" style={styles.machineCard}>
        <div className="card-body" style={styles.cardBody}>
          <h2 style={styles.machineName}>{machine.machine_name}</h2>
          <table style={styles.table}>
            <tbody>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Total Production Count</td>
                <td style={{ padding: '10px 0' }}>{totalProductionCountAllShifts}</td>
              </tr>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Shift Name</td>
                <td style={{ padding: '10px 0' }}>{latestShiftData?.shift_name || `Shift ${latestShiftData?.shift_no}` || 'N/A'}</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Current Shift Total</td>
                <td style={{ padding: '10px 0' }}>{totalProductionCountCurrentShift}</td>
              </tr>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Shift Time</td>
                <td style={{ padding: '10px 0' }}>
                  {latestShiftData?.shift_start_time
                    ? calculateEndTime(latestShiftData.shift_start_time)
                    : 'N/A'}
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Date</td>
                <td style={{ padding: '10px 0' }}>{currentDate}</td>
              </tr>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Last Production Time</td>
                <td style={{ padding: '10px 0' }}>{machine.latest_production_count}</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ ...styles.boldText, padding: '10px 0' }}>Status</td>
                <td style={{ padding: '10px 0' }}>
                  <div style={{ ...styles.statusIndicator, backgroundColor: getStatusColor(Machinestatus) }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Shift Reports Card */}
      <div className="shift-reports-card" style={styles.shiftReportsCard}>
        <h3 style={styles.shiftReportsTitle}>Shift Reports</h3>
        <div className="card-body">
          {filteredShifts.length > 0 ? (
            filteredShifts.map((shift, index) => (
              <div className="shift-card" key={shift.shift_start_time} style={styles.shiftCard}>
                <h4 style={styles.shiftName}>{shift.shift_name || `Shift ${shift.shift_no}`}</h4>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>Time</th>
                      <th style={styles.tableHeader}>Production Count</th>
                      <th style={styles.tableHeader}>Target Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(shift.timing).length > 0 ? (
                      Object.keys(shift.timing).map((timeRange, timeIndex) => (
                        <tr key={timeRange} style={{
                          backgroundColor: timeIndex % 2 === 0 ? '#f9f9f9' : '#fff',
                          height: '40px', // Space between rows
                        }}>
                          <td style={styles.tableCell}>{timeRange}</td>
                          <td style={styles.tableCell}>{shift.timing[timeRange]?.actual_production || '0'}</td>
                          <td style={styles.tableCell}>{shift.timing[timeRange]?.target_production || '0'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" style={{ textAlign: 'center' }}>
                          No data available
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td style={styles.boldText}>Total</td>
                      <td style={styles.boldText}>
                        {Object.values(shift.timing).reduce(
                          (sum, timing) => sum + (timing.actual_production || 0),
                          0
                        )}
                      </td>
                      <td style={styles.boldText}>
                        {Object.values(shift.timing).reduce(
                          (sum, timing) => sum + (timing.target_production || 0),
                          0
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center' }}>No shifts available</div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '50px',
  },
  machineCard: {
    maxWidth: '450px',
    width: '100%',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  cardBody: {
    padding: '20px',
  },
  machineName: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#047BC4',
  },
  statusIndicator: {
    width: '100px',
    height: '20px',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: '-12px',
  },
  shiftReportsCard: {
    maxWidth: '800px',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  shiftReportsTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  shiftCard: {
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
  },
  shiftName: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  tableHeader: {
    backgroundColor: '#047BC4',
    color: '#ffffff',
    padding: '10px',
  },
  tableCell: {
    padding: '10px',
  },
};

export default Machine;
