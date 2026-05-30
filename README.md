## Live URLs

- **Client:** https://platescout-chapmaa9.vercel.app
- **Server:** https://platescout-chapmaa9.onrender.com
- **Server health check:** https://platescout-chapmaa9.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URL` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

 ## What I learned during deployment    
 During deployment I Learned how to properly configure render and vercel so that they would both work together for the front, and backend of a website.
 Despite how common vercel is for completing production I found its webpage to be suprisingy difficult to navigate when compared to render. What took me
 the longest to begug for this assignment was the environments, specifically VITE_API_BASE_URL. This was because import.meta.env requires environment
 variables to have the prefix VITE_ to work properly, and I didn't notice that this was missing from my variable. Next time I do this I would be more
 thorough in proofreading my code to make sure that something like this doesn't happen again. I would also test my backend first against a local dev
 version of my backend to make sure that both are working properly, before doing the same for the deployed front-end.
