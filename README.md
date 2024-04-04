# Clepher Frontend Developer / Engineer - Stock Chart Application

This is a React application that displays a stock chart using data fetched from the Alpha Vantage API. The application is built with TypeScript, React, Chart.js, and Tailwind CSS.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/chesspamungkas/clepher-frontend-stock-chart-app.git
```

2. Navigate to the project directory:

```bash
cd stock-chart-app
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variable to the `.env` file:

```bash
REACT_APP_API_KEY=your-alpha-vantage-api-key
```

Replace `your-alpha-vantage-api-key` with your actual Alpha Vantage API key.

## Running the Application

To start the application, run the following command:

```bash
npm start
```

This will start the development server, and you can access the application in your browser at `http://localhost:3000`.

## REST API

The application fetches stock data from the Alpha Vantage API. The API endpoint used is:

https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}

Make sure you have a valid API key from Alpha Vantage and have set it in the `.env` file.

This will run the test suite using Jest and display the test results in the console.

## Running ESLint

To run ESLint and check for linting errors, use the following command:

```bash
npm run lint
```

This will run ESLint on the source files and display any linting errors or warnings.

To automatically fix fixable linting errors, use:
```bash
npm run lint:fix
```