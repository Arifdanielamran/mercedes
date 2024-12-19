document.addEventListener('DOMContentLoaded', function() {
    const reportList = document.getElementById('reportList');
    const reports = JSON.parse(localStorage.getItem('reports')) || [];

    if (reports.length === 0) {
        reportList.innerHTML = '<p>No reports available.</p>';
    } else {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        thead.innerHTML = `
            <tr>
                <th>#</th>
                <th>Model</th>
                <th>Variant</th>
                <th>Comm No</th>
                <th>Fault Priority</th>
                <th>Fault Type</th>
                <th>Fault Description</th>
                <th>CL</th>
                <th>Person in Charge</th>
                <th>Hyperlink</th>
            </tr>
        `;

        reports.forEach(function(report, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${report.model}</td>
                <td>${report.variant}</td>
                <td>${report.comm_no}</td>
                <td>${report.fault_prior}</td>
                <td>${report.fault_type}</td>
                <td>${report.fault_desc}</td>
                <td>${report.cl}</td>
                <td>${report.person_in_charge}</td>
                <td><a href="${report.hyperlink}" target="_blank">${report.hyperlink}</a></td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        reportList.appendChild(table);
    }
});