const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const portfolioRoutes = require('./src/routes/portfolio.routes');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:4200,http://localhost:80')
  .split(',')
  .map(o => o.trim());

app.use(helmet());
app.use(cors({
  origin: (origin, cb) => cb(null, !origin || allowedOrigins.includes(origin)),
}));
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Running on http://localhost:${PORT}`);
});
