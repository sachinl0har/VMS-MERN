const app = require('./app');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

// CONFIG
dotenv.config({ path: 'backend/config/config.env' });

// CONNECT DATABASE
connectDB();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});