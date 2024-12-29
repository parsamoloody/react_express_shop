import fs from 'fs';
import path from 'path';

// Get the directory name of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Path to the JSON data file
const dataFilePath = path.join(__dirname, '../data/data.json');

// Function to load data from JSON file
const loadData = () => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(rawData);
};

// Function to get all jeans
export const getJeans = () => {
  const data = loadData();
  return data.jeans;
};

// Function to get all dresses
export const getDresses = () => {
  const data = loadData();
  return data.dresses;
};

// Function to get all sale items
export const getSaleItems = () => {
  const data = loadData();
  return data.sale;
};
