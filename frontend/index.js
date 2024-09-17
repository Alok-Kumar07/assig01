document.addEventListener('DOMContentLoaded', function() {
    fetch('/top-tickers')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#crypto-table tbody');
            data.forEach(crypto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${crypto.name}</td>
                    <td>${crypto.last}</td>
                    <td>${crypto.buy}</td>
                    <td>${crypto.sell}</td>
                    <td>${crypto.volume}</td>
                    <td>${crypto.base_unit}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});