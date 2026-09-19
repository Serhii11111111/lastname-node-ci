const http = require('http');
const { Pool } = require('pg');

const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'nodeapp',
  user: process.env.DB_USER || 'nodeapp',
  password: process.env.DB_PASSWORD || 'nodeapp_password'
});

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  try {
    const result = await pool.query('SELECT NOW() AS current_time');

    res.end(`
      <h1>Hello from AWS EC2!</h1>
      <p>CI/CD deployment works.</p>
      <p>PostgreSQL connection: OK</p>
      <p>Database time: ${result.rows[0].current_time}</p>
    `);
  } catch (error) {
    res.end(`
      <h1>Hello from AWS EC2!</h1>
      <p>CI/CD deployment works.</p>
      <p>PostgreSQL connection: ERROR</p>
      <p>${error.message}</p>
    `);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});