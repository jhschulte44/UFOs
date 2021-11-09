// import data from data.js
const tableData = data;
// reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Loop through each object in data
    // and append row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Loop through each field in dataRow and
        // add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
};