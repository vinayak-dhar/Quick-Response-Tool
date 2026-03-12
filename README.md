
# Quick Response Tool

A full-stack application with a **React frontend** and **Node.js backend**.
The backend can run normally with Node.js or inside a **Docker container**.
The project also includes a **CI/CD pipeline using GitHub Actions** that can build, push Docker images, and trigger deployments.

---

# Project Structure

```
quick-response-tool
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── frontend
│   └── quick-response-tool
│        ├── package.json
│        ├── src
│        └── ...
│
└── .github
    └── workflows
        └── deploy.yml
```

---

# 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/quick-response-tool.git
cd quick-response-tool
```

---

# 2. Running the Backend Locally

Move to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the **backend** folder.

Example:

```
PORT=5000
GEMINI_API_KEY=your_gemini_key
RESEND_API_KEY=your_resend_key
```

Run the backend:

```bash
npm start
```

or

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

# 3. Running the Frontend Locally

Move to the React app directory:

```bash
cd frontend/quick-response-tool
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

Frontend will run on:

```
http://localhost:5173
```

(or whichever port your React setup uses)

---

# 4. Connecting Frontend to Backend

Inside the frontend code you will see an Axios or fetch request.

Example:

```javascript
axios.post("http://localhost:5000/api/...")
```

If the backend is deployed online (for example on Render), change it to:

```javascript
axios.post("https://your-backend.onrender.com/api/...")
```

After changing the API URL, rebuild or redeploy the frontend.

---

# 5. Backend Containerization with Docker

Navigate to the backend folder:

```bash
cd backend
```

Build the Docker image:

```bash
docker build -t your-dockerhub-username/backend-image-name .
```

Example:

```bash
docker build -t username/quick-response-backend .
```

Run the container locally:

```bash
docker run -p 5000:5000 username/quick-response-backend
```

---

# 6. Push the Docker Image to Docker Hub

Login to Docker Hub:

```bash
docker login
```

Tag the image:

```bash
docker tag quick-response-backend username/quick-response-backend:latest
```

Push the image:

```bash
docker push username/quick-response-backend:latest
```

Your image will now be available on Docker Hub.

---

# 7. Deploy Backend on Render Using Docker Image

1. Go to the Render dashboard.
2. Create a **New Web Service**.
3. Select **Deploy from Docker Image**.
4. Enter your Docker Hub image name:

```
username/quick-response-backend:latest
```

Add environment variables:

```
GEMINI_API_KEY=your_gemini_key
RESEND_API_KEY=your_resend_key
```

Deploy the service.

Render will pull the Docker image and run the backend.

---

# 8. Deploy Frontend on Vercel

Push your frontend code to GitHub.

Go to Vercel and:

1. Import your GitHub repository.
2. Select the project.
3. Set the **root directory** to:

```
frontend/quick-response-tool
```

4. Deploy.

Before deploying, make sure the frontend Axios URL uses your **Render backend URL**.

Example:

```
https://your-backend.onrender.com
```

---

# 9. CI/CD Pipeline

This project includes a **GitHub Actions pipeline** located at:

```
.github/workflows/deploy.yml
```

The pipeline performs:

1. Install dependencies
2. Run lint checks
3. Build frontend
4. Build Docker image
5. Push image to Docker Hub
6. Trigger backend deployment on Render

---

# 10. Required GitHub Secrets for CI/CD

Go to your repository:

```
GitHub Repository
→ Settings
→ Secrets and variables
→ Actions
```

Create the following secrets.

### Docker Hub

```
DOCKER_USERNAME
DOCKER_PASSWORD (Docker access token)
DOCKER_REPO
```

### Render

```
RENDER_DEPLOY_HOOK
```

You can get this from the **Render service Deploy Hook URL**.

### Optional (if using automated frontend deployment)

```
VERCEL_DEPLOY_HOOK
```

---

# 11. Creating a Docker Access Token

1. Go to Docker Hub.
2. Open **Account Settings**.
3. Navigate to **Security → Access Tokens**.
4. Generate a new token.
5. Use it as `DOCKER_PASSWORD` in GitHub Secrets.

---

# 12. Deployment Flow

```
Developer pushes code
        ↓
GitHub Actions CI/CD pipeline runs
        ↓
Build project
        ↓
Build Docker image
        ↓
Push image to Docker Hub
        ↓
Trigger Render deployment
        ↓
Render pulls latest Docker image
        ↓
Backend updated
        ↓
Frontend deployed on Vercel
```

---

# Environment Variables Required

Backend requires the following environment variables:

```
GEMINI_API_KEY
RESEND_API_KEY
```

These must be configured in:

* `.env` for local development
* Render environment variables for production

---

# Summary

Local Development

```
Backend → Node.js
Frontend → React
```

Production Deployment

```
Backend → Docker → Docker Hub → Render
Frontend → Vercel
CI/CD → GitHub Actions
```

---

# License

This project is provided for educational and development purposes.
