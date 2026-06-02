process.env.PORT = process.env.PORT || 3000;
process.env.HOST = '0.0.0.0';
import('./dist/server/index.mjs').catch(console.error);
