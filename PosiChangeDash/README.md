# Positive Change Dashboard

This is a simple web dashboard that displays a "Positive Change Metric" using a bar chart. The dashboard provides a visual representation of a positive change metric, and it can be used to showcase positive changes, improvements, or any other metric you want to visualize.

## Features

- Displays a positive change metric as a bar chart.
- Uses Chart.js for data visualization.
- Supports loading data from an external JSON file (`data.json`).
- Provides a default metric value in case of data loading issues.

## Usage

1. The dashboard displays the "Positive Change Metric" as a bar chart.
2. Data for the metric is loaded from `data.json`.
3. In case of data loading issues, a default value of `50` is displayed.

## Dependencies

- Express.js: Web server framework for Node.js.
- Chart.js: JavaScript charting library for data visualization.

## Project Structure

- `index.html`: HTML file for the dashboard.
- `styles.css`: CSS styles for the dashboard.
- `script.js`: JavaScript code for data processing and visualization.
- `server.js`: Node.js server to serve the web application.
- `data.json`: JSON file containing the positive change metric data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
