# NeuroVision

An AI-driven mental health assessment platform capable of remote authentication and preliminary risk screening. Integrates **Google Gemini** for conversational analysis and **WebRTC** for visual emotion detection.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- A **Google Gemini API Key** (Get it from [Google AI Studio](https://aistudio.google.com/))
- A **MongoDB Atlas** Cluster (Get it from [MongoDB.com](https://www.mongodb.com/atlas))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rahmanp-dev/Neurovision.git
    cd Neurovision
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env.local` in the root directory and add the following:
    ```ini
    # Database (MongoDB Connection String)
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/?retryWrites=true&w=majority
    
    # AI (Google Gemini)
    GEMINI_API_KEY=AIzaSy...
    
    # Security (Random String for JWT)
    JWT_SECRET=my-super-secret-key-123
    
    # API URL (Leave blank for local development)
    NEXT_PUBLIC_API_URL=
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack
-   **Framework**: Next.js 14+ (App Router)
-   **Database**: MongoDB (via Mongoose)
-   **AI**: Google Gemini (Flash 2.5)
-   **Styling**: Tailwind CSS
-   **Charts**: Recharts

## 📦 Deployment (Vercel)
This project is optimized for deployment on Vercel.
1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Add the Environment Variables in the Vercel Dashboard.
4.  Deploy!
