// Docker: apiUrl = ''  (nginx proxia /api/ al backend internamente)
// Vercel + Render: apiUrl = 'https://portfolio-api.onrender.com'
// Railway: apiUrl = 'https://portfolio-api.up.railway.app'
export const environment = {
  production: true,
  apiUrl: '',
};
