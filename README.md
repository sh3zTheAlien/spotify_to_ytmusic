# Playlist Porter 🎶

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Tkinter](https://img.shields.io/badge/UI-Tkinter-orange?style=for-the-badge)](https://docs.python.org/3/library/tkinter.html)

A simple desktop application to transfer your Spotify playlists to YouTube Music. This app provides a basic graphical user interface built with Python's standard GUI toolkit, Tkinter.

![App Screenshot](https://via.placeholder.com/600x400.png?text=Your+Tkinter+App+Screenshot)

***

## ## Features

-   **Simple Desktop UI**: No need to use the command line. A straightforward window with an input field and a button.
-   **Secure Authentication**: Uses a browser-based OAuth 2.0 flow to securely connect to your Spotify and Google accounts.
-   **Easy Operation**: Just paste your Spotify playlist URL and click a button to start the transfer.
-   **Smart Matching**: A refined search algorithm finds the best possible match for each track on YouTube.

***

## ## Tech Stack

-   **Language**: **Python 3**
-   **GUI Framework**: **Tkinter** (from Python's standard library)
-   **Key Libraries**: `requests`, `spotipy`, `google-api-python-client`, `google-auth-oauthlib`

***

## ## Getting Started

Follow these steps to get the application running on your local machine.

### ### Prerequisites

-   Python 3.8 or later
-   Pip package manager
-   Git

### ### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up API Credentials:**
    * **Spotify**:
        1.  Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
        2.  Create an app and note the `Client ID` and `Client Secret`.
        3.  Set the **Redirect URI** to `http://localhost:8888/callback`.
    * **Google (YouTube)**:
        1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
        2.  Enable the **YouTube Data API v3**.
        3.  Create OAuth 2.0 credentials for a **Desktop app**.
        4.  Download the credentials file and save it as `client_secret.json` in the project's root directory.

***

## ## Usage

Run the main Python script from your terminal to launch the application window.

```bash
python main.py
