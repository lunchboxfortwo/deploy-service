const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'operational',
    message: 'Production service running',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});