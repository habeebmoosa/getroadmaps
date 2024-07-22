# Get RoadMaps

Empower Your Journey: Let AI Craft Your Roadmap. Personalized, Efficient, and Future-Forward.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Get RoadMaps is an AI-driven tool designed to help users create personalized roadmaps for their journeys. Whether you are planning a learning path, career development, or any other project, Get RoadMaps provides an intuitive interface to craft tailored roadmaps efficiently.

## Features

- **Generative AI:** Create customized roadmaps based on user prompts.
- **Downloadable Roadmaps:** Easily download your roadmap as an image for reference.
- **Roadmap Spaces:** Store the raodmap in each their space and access whenever you want.

## Getting Started

To get started with Get RoadMaps, follow the instructions below to set up the project locally.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/habeebmoosa/getroadmaps.git
   cd getroadmaps
   ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Start the development server:**

    ```bash
    npm run dev
    ```
4. **Open your browser and visit:**

    ```bash
    http://localhost:3000
    ```
5. **Create Clerk account for authenication, MongoDB Atlas for database, Gemini API and create .env.local file:**

    ```bash
    # Gemini API key
    API_KEY=your_gemini_api_key

    # Clerk authentication keys
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key

    # Clerk URLs
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    # MongoDB connection string
    MONGO_URI=your_mongodb_connection_uri
    ```

## Usage

1. **Write a Prompt:** Enter your prompt in the text area to generate a roadmap.
2. **Generate Roadmap:** The AI model will create a roadmap based on your input.
3. **Download:** Save your roadmap as an image for future reference.

## Tech Stack

- **Frontend & Backend:** TypeScript, Next.js
- **Generative AI API:** Gemini Pro 1.0 or Gemini Pro 1.5 Flash API
- **Database:** MongoDB or MongoDB Atlas
- **Styling:** Tailwind CSS, Shadcn UI

## Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Designed and developed by Habeeb Moosa.

- **Email:** habeebmoosadev@gmail.com
- **GitHub:** [GitHub.com/habeebmoosa](https://github.com/habeebmoosa)
- **LinkedIn:** [LinkedIn.com/habeebmoosa](https://www.linkedin.com/in/habeebmoosa)

© 2024 Get RoadMaps. All rights reserved.
