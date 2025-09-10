SaralIntern - Vernacular AI-Powered Internship Matchmaking Platform
Introduction
SaralIntern is an AI-based internship recommendation engine developed for the Smart India Hackathon 2025 under the problem statement AI-Based Internship Recommendation Engine for PM Internship Scheme (ID: 25034) by the Ministry of Corporate Affairs (MoCA). Our mobile-first, lightweight Progressive Web App (PWA) bridges the gap between first-generation learners and internship opportunities in India. By leveraging a hybrid intelligence approach (machine learning with rule-based fallbacks), vernacular voice interfaces, and offline capabilities, SaralIntern ensures accessibility for candidates from rural areas, tribal districts, and urban slums.
Team Name: ShadgunaTeam Leader: Anshul Sharma (Project Manager & System Designer)Team Members:  

Manisha Mitra (Frontend Developer)  
Piyush Upadhyay (Backend Developer)  
Shivang Kumar Singh (Database Administrator)  
Zara Nasir (Research and Data Analytics)  
Sayan Laha (ML Engineer)  
Anshul Sharma (DevOps Engineer)

Problem Statement
The PM Internship Scheme aims to connect students with internship opportunities but faces challenges like misaligned applications and limited accessibility for rural and low-literacy users. SaralIntern addresses these by providing personalized, accessible, and inclusive internship recommendations.
Features

Smart Profiling: Conversational UI for easy profile creation with minimal effort.
Hybrid Recommendation Engine: Combines collaborative filtering (SVD++) and rule-based logic for accurate matches, even for cold-start users.
Vernacular Voice Interface: Supports 10+ regional languages using Google Speech-to-Text and transliteration.
Offline Mode & WhatsApp Bot: Ensures accessibility in low-connectivity areas via Service Workers and TensorFlow Lite.
Visual Navigation: Icon-based, low-text interface for users with limited digital literacy.
Career Path & Community: Visualizes growth trajectories and connects peers for collaboration.
Scalable & Lightweight: PWA (<2MB) with cross-platform support via React Native Web.

Architecture
Frontend

Framework: React Native Web with TypeScript
State Management: Redux Toolkit with RTK Query
Styling: Tailwind CSS with WCAG 2.1 AA compliance
Performance: Lazy loading, code splitting, and image optimization

Backend

API Framework: FastAPI (Python 3.9+)
Database: PostgreSQL 14 with pgvector for embeddings
Cache: Redis 6.0
Search Engine: Elasticsearch 8.0
Message Queue: RabbitMQ for asynchronous tasks

Machine Learning

Training Pipeline: Apache Airflow
Model Serving: TensorFlow Serving with versioning
Feature Store: Feast
Monitoring: MLflow
Edge Deployment: TensorFlow Lite for mobile inference

DevOps

Containerization: Docker with multi-stage builds
Orchestration: Kubernetes with auto-scaling
CI/CD: GitHub Actions
Monitoring: Prometheus + Grafana
CDN: Cloudflare for static assets

Installation & Setup

Clone the Repository:
git clone https://github.com/your-team-repo/saralintern.git
cd saralintern


Frontend Setup:
cd frontend
npm install
npm start


Backend Setup:
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload


Environment Variables:Create a .env file in the backend directory:
DATABASE_URL=postgresql://user:password@localhost:5432/saralintern
REDIS_URL=redis://localhost:6379
ELASTICSEARCH_URL=http://localhost:9200


ML Pipeline:

Install Apache Airflow and configure DAGs for training.
Set up TensorFlow Serving for model deployment.


Docker Setup:
docker-compose up --build



Usage

Access the PWA: Open http://localhost:3000 in a browser or install as a PWA on mobile.
Create a Profile: Use voice or text input to build your profile in <5 minutes.
Get Recommendations: Receive 3–5 tailored internship suggestions in ~2 seconds.
Apply: One-tap application with push notifications for deadlines.

Impact

Quantifiable: 30–40% improvement in match quality, reducing application time from ~45 minutes to ~10 minutes.
Social: Empowers first-generation learners with vernacular support and peer networks.
Economic: Enhances employability, reduces recruitment costs, and boosts local economies.

Market Research

Digital Divide: Only ~18% of rural schools have internet access (Ministry of Education, 2024).
Connectivity: ~70% of rural households face unreliable internet (India Development Review, 2021).
PM Internship Scheme: Only ~10% of 650,000 applications resulted in placements in 2024 (Wikipedia).
Competitive Edge: Unlike Internshala or LinkedIn, SaralIntern prioritizes vernacular support, offline access, and inclusivity.

Contributing
We welcome contributions! Please follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For inquiries, reach out to Anshul Sharma at anshul.23bai10200@vitbhopal.ac.in.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
