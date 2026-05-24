# Resumind - AI Resume Analyzer

**Live Demo:** https://puter.com/app/resumind-42


##  Features

- **ATS Analysis** — Check how well your resume passes through Applicant Tracking Systems
- **Tone & Style Evaluation** — Ensure professional language and consistent formatting
- **Content Assessment** — Evaluate the relevance and quality of your resume content
- **Structure Review** — Analyze resume organization and section layout
- **Skills Analysis** — Extract and assess technical and professional skills
- **Overall Scoring** — Get a comprehensive score and actionable feedback
- **PDF Support** — Upload and analyze PDF resumes
- **Multi-Resume Tracking** — Track applications and ratings across multiple positions


##  Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install dependencies
npm install

# Start development server
npm run dev
```

##  Tech Stack

- **Frontend:** React 19 + React Router 7
- **Styling:** Tailwind CSS
- **PDF Processing:** PDF.js
- **File Upload:** React Dropzone
- **State Management:** Zustand
- **Authentication:** Puter
- **Build Tool:** Vite
- **Language:** TypeScript


## 📁 Project Structure

```
app/
├── components/        # Reusable React components (ATS, ScoreGauge, etc.)
├── routes/           # Page routes (home, upload, resume, auth, etc.)
├── lib/              # Utilities (PDF to image conversion, Puter auth)
├── welcome/          # Welcome/landing page
└── routes.ts         # Route configuration
constants/            # App constants and default data
public/              # Static assets
types/               # TypeScript type definitions
```


## 📝 Usage

1. **Authenticate** — Sign in with your Puter account
2. **Upload Resume** — Upload a PDF resume or use example resumes
3. **View Analysis** — See detailed scoring across multiple dimensions
4. **Track Applications** — Keep track of resumes for different job applications
5. **Improve** — Use the feedback tips to optimize your resume