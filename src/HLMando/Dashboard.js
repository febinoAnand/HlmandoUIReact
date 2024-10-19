import React, { useState } from 'react';
import '../scss/dashboard.scss';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [machineGroups, setMachineGroups] = useState({
        all: true,  
        mclmi: false,
        hsgmi: false,
        crrmi: false,
        calpi: false,
    });

    const machines = [
        { id: 'MCLMI1', name: 'MCLMI 1', current: 990, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
         { id: 'MCLMI2', name: 'MCLMI 2', current: 800, max: 1000, group: 'mclmi' },
        { id: 'HSGMI1', name: 'HSGMI 1', current: 600, max: 1000, group: 'hsgmi' },
        { id: 'HSGMI2', name: 'HSGMI 2', current: 900, max: 1000, group: 'hsgmi' },
        { id: 'CRRMI1', name: 'CRRMI 1', current: 700, max: 1000, group: 'crrmi' },
        { id: 'CRRMI2', name: 'CRRMI 2', current: 850, max: 1000, group: 'crrmi' },
        { id: 'CALPI1', name: 'CALPI 1', current: 450, max: 1000, group: 'calpi' },
        { id: 'CALPI2', name: 'CALPI 2', current: 300, max: 1000, group: 'calpi' },
    ];

    const handleGroupChange = (group) => {
        setMachineGroups(prevGroups => {
            const updatedGroups = {
                ...prevGroups,
                [group]: !prevGroups[group],
                all: false,  // Uncheck 'All' if a specific group is selected
            };

            // If all groups are unchecked, set 'all' to true
            if (!updatedGroups.mclmi && !updatedGroups.hsgmi && !updatedGroups.crrmi && !updatedGroups.calpi) {
                updatedGroups.all = true;
            }

            return updatedGroups;
        });
    };

    
    const filteredMachines = machines.filter(machine => {
        if (machineGroups.all) return true;  
        return machineGroups[machine.group];  
    });

    // Group machines by their group name
    const groupedMachines = machines.reduce((acc, machine) => {
        const { group } = machine;
        if (!acc[group]) acc[group] = [];
        acc[group].push(machine);
        return acc;
    }, {});

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="content-container">
                <div className="card">
                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                        <div className="checkbox-group">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={machineGroups.all} 
                                    onChange={() => {
                                        setMachineGroups({
                                            all: !machineGroups.all,
                                            mclmi: false,
                                            hsgmi: false,
                                            crrmi: false,
                                            calpi: false,
                                        });
                                    }} 
                                /> All
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={machineGroups.mclmi} 
                                    onChange={() => handleGroupChange('mclmi')} 
                                /> MCLMI
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={machineGroups.hsgmi} 
                                    onChange={() => handleGroupChange('hsgmi')} 
                                /> HSGMI
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={machineGroups.crrmi} 
                                    onChange={() => handleGroupChange('crrmi')} 
                                /> CRRMI
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={machineGroups.calpi} 
                                    onChange={() => handleGroupChange('calpi')} 
                                /> CALPI
                            </label>
                        </div>
                    </div>
                </div>
                <div className="machines-container">
                    {Object.keys(groupedMachines).map(group => (
                        <div key={group} className="group-card">
                            <h2>{group.toUpperCase()}</h2>
                            <div className="machines">
                                {groupedMachines[group]
                                    .filter(machine => filteredMachines.includes(machine))
                                    .map(machine => (
                                        <div
                                            key={machine.id}
                                            style={{
                                                width: 180,
                                                height: 180,
                                                position: 'relative',
                                                marginRight: '40px', 
                                                display: 'inline-block',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 82,
                                                    height: 72,
                                                    backgroundColor: 'blue',
                                                    position: 'absolute',
                                                    top: 4,
                                                    left: 2,
                                                }}
                                            />
                                            <div
                                                style={{
                                                    width: 150,
                                                    height: 150,
                                                    borderRadius: '50%',
                                                    border: '8px solid blue',
                                                    backgroundColor: 'white',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'absolute',
                                                    top: 4,
                                                    left: 2,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 10,
                                                        height: 10,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'green',
                                                        border: '1px solid white',
                                                        position: 'absolute',
                                                        top: 2,
                                                        left: 3,
                                                    }}
                                                />
                                                {/* Arc SVG */}
                                                <svg
                                                    width={150}
                                                    height={150}
                                                    viewBox="0 0 150 150"
                                                    style={{
                                                        position: 'absolute',
                                                        top: -47,
                                                        left: -60,
                                                        transform: 'rotate(46deg)',
                                                    }}
                                                >
                                                    <path
                                                        d="M 75, 75 a 75 75 0 0 1 75 -75"
                                                        fill="blue"
                                                    />
                                                </svg>
                                                <div
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 'bold',
                                                        color: 'white',
                                                        position: 'absolute',
                                                        top: 10,
                                                        zIndex: 1,
                                                    }}
                                                >
                                                    <span style={{
                                                        display: 'inline-block',
                                                    }}>{machine.name}</span>
                                                </div>
                                                <div style={{ fontSize: 24, fontWeight: 'bold', color: 'blue', marginTop: 30 }}>
                                                    <span style={{ fontSize: 16 }}>{machine.current}</span>
                                                    <br />
                                                    <span style={{ fontSize: 16 }}>{machine.max}</span>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 70,
                                                        height: 10,
                                                        backgroundColor: 'green',
                                                        marginTop: 10,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
