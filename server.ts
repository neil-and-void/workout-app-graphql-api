import dotenv from 'dotenv';
import app from './src';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
