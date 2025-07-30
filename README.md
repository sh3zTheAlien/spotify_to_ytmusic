# Playlist Porter 🎶

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Effortlessly transfer your Spotify playlists to YouTube Music with a single click. This app uses the official APIs of both services to securely browse your Spotify playlists and recreate them in your YouTube Music library.

![App Demo](https://via.placeholder.com/800x400.png?text=Your+App+Screenshot+Here)

***

## ## Features

-   **Secure Authentication**: Connects safely to your Spotify and Google accounts using OAuth 2.0. Your credentials are never stored.
-   **Playlist Discovery**: Automatically fetches and displays all your public and private Spotify playlists.
-   **One-Click Transfer**: Seamlessly recreates a selected Spotify playlist on YouTube Music.
-   **Smart Matching**: Uses a refined search algorithm to find the best possible match for each track, prioritizing official audio and artist channels.
-   **Responsive Design**: A clean, modern UI that works beautifully on both desktop and mobile devices.

***

## ## Tech Stack

This project is a full-stack application built entirely within the Next.js ecosystem.

-   **Framework**: [Next.js](https://nextjs.org/) (React)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Backend**: Next.js API Routes (Serverless Functions)
-   **Deployment**: [Vercel](https://vercel.com/)

***

## ## Getting Started

You can run your own instance of this project locally.

### ### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [Git](https://git-scm.com/)
-   A Spotify Developer account and a Google Cloud Platform account to get API keys.

### ### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the variables listed below.
    ```bash
    cp .env.example .env.local
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

***

## ## Environment Variables

To run this project, you need to add the following environment variables to your `.env.local` file.

| Variable              | Description                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `APP_URL`             | The full URL of your application. For local development, this is `http://localhost:3000`.                                                                               |
| `SPOTIFY_CLIENT_ID`   | Your client ID from the Spotify Developer Dashboard.                                                                                                                    |
| `SPOTIFY_CLIENT_SECRET` | Your client secret from the Spotify Developer Dashboard.                                                                                                                |
| `GOOGLE_CLIENT_ID`    | Your client ID from the Google Cloud Console.                                                                                                                           |
| `GOOGLE_CLIENT_SECRET`  | Your client secret from the Google Cloud Console.                                                                                                                       |
| `GOOGLE_API_KEY`      | Your simple API key from the Google Cloud Console, used for public search queries.                                                                                      |
| `COOKIE_SECRET`       | A long, random, private string used to sign the session cookie. You can generate one using `openssl rand -base64 32`.                                                      |

**Important**: In both your Spotify and Google API settings, you must add your callback URL to the list of authorized redirect URIs: `http://localhost:3000/api/auth/callback`.

***

## ## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
