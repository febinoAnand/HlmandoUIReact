import React from 'react';
import '../scss/productionmonitor.scss';

const ProductionMonitor = () => {
    return (
        <div className="production-monitor">
            <header className="header">
                <h1>Production Monitor</h1>
            </header>

            <div className="controls-card">
                <div className="controls">
                    <input
                        type="date"
                        className="date-input"
                    />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                    <button className="filter-button">
                        <i className="fas fa-filter"></i> Filter
                    </button>
                   
                    <button className="download-button">
                        <i className="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            
            <div className="table-card">
            <h2 className="shift-header">Shift 1 Details</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Workcentre</th>
                            <th>Shift 1</th>
                            <th>Shift 2</th>
                            <th>Shift 3</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>WC 1</td>
                            <td>10</td>
                            <td>12</td>
                            <td>15</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>WC 2</td>
                            <td>8</td>
                            <td>10</td>
                            <td>14</td>
                            <td>32</td>
                        </tr>
                         {/* Total Row */}
                         <tr>
                                <td><strong className="total">Total</strong></td>
                                <td><strong></strong></td>
                                <td><strong></strong></td>
                                <td><strong></strong></td>
                                <td><strong></strong></td> {/* Grand total */}
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductionMonitor;
