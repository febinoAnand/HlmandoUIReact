// Listemployees.js
import React, { useState } from 'react';
import '../scss/listemployee.scss'; // Ensure this is correctly linked

const ListEmployee = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data for the table
    const employees = [
        { id: 1, name: 'John Doe', status: 'Active', email: 'employee1@example.com' },
        { id: 2, name: 'Jane Smith', status: 'Inactive', email: 'employee2@example.com' },
        { id: 3, name: 'Michael Brown', status: 'Wait', email: 'employee3@example.com' },
        // Add more sample data as needed
    ];

    const renderStatusBadge = (status) => {
        let className = '';

        switch (status) {
            case 'Active':
                className = 'badge active';
                break;
            case 'Wait':
                className = 'badge wait';
                break;
            case 'Inactive':
                className = 'badge inactive';
                break;
            default:
                className = 'badge';
        }

        return <span className={className}>{status}</span>;
    };

    return (
        <div className="list-employee">
          <h2>List Employee</h2>
            {/* Search Card */}
            <div className="search-card">
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search employees"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-button">
                        <i className="fas fa-search"></i> 
                    </button>
                </div>
            </div>

            {/* Table Card */}
            <div className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Users</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{employee.name}</td>
                                <td>{renderStatusBadge(employee.status)}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="action-button">
                                        <i className="fas fa-light fa-circle-info"></i>
                                    </button>
                                    <button className="action-button">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployee;
