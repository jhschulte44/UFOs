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

function handleClick() {
    // Grab a datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    buildTable(filteredData);
};

// Attach an event to "listen" for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
