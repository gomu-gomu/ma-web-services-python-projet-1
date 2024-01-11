import { getTotalData } from './api.js';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await getTotalData();
  const keys = Object.keys(data);

  for (const key of keys) {
    const number = data[key];
    const counter = new countUp.CountUp(`stat-${key}`, number);

    counter.start();
  }
});