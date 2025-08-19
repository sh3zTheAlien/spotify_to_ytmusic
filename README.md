# Spotify to YouTube Music Playlist Transfer

This project allows you to transfer your playlists from Spotify to YouTube Music. It consists of a Next.js frontend and a Python backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm/pnpm
*   Python 3

### Installation and Running

**Backend (Python/FastAPI)**

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

3.  Run the backend server:
    ```bash
    uvicorn src.main:app --reload
    ```
    The backend will be running at `http://127.0.0.1:8000`.

**Frontend (Next.js)**

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  Install the required Node.js packages:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  Run the frontend development server:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```
    The frontend will be running at `http://localhost:3000`.

Now you can open `http://localhost:3000` in your browser to use the application.