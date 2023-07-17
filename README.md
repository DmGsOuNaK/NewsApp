**News Aggregator App**

## Overview

The News Aggregator App is a web application that aggregates news articles from various sources using the News API. It provides users with a centralized platform to access the latest news from different categories, all in one place. The app is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a smooth and responsive user experience.

## Features

- **News Categories:** Users can explore news articles from various categories like politics, sports, technology, entertainment, etc.

- **Search Functionality:** Users can search for specific news articles based on keywords.

- **Article Details:** Clicking on a news article will display the full article with all relevant details.

- **User Authentication:** Users can sign up, log in, and have personalized access to features like saving favorite articles.
  
- **Responsive Design:** The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.


## Technology Stack

The app is built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack:

- **Frontend:** React.js, HTML, CSS, JavaScript

- **Backend:** Node.js, Express.js

- **Database:** MongoDB

- **External API:** News API *(https://newsapi.org/)*

## Installation and Setup

If you want to run the app locally or deploy it on your server, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/DmGsOuNaK/NewsApp
   cd NewsApp
   ```

2. Install dependencies for both the frontend and backend:
   ```
   npm install
   cd ../src
   npm install (to hit the serer.js)
   ```

3. Configure API Keys:
   - Sign up for a free API key at [https://newsapi.org/](https://newsapi.org/).
   - Replace `YOUR_NEWS_API_KEY` with your actual News API key in the `backend/config/config.js` file.

4. Database Configuration:
   - Make sure you have MongoDB installed and running on your machine or provide the connection URL of your MongoDB database in `backend/config/config.js`.

5. Start the Development Servers:
   ```
   cd NewsApp
   npm start
   cd ../src
   node server.js
   ```

6. Open your web browser and navigate to [http://localhost:5000](http://localhost:5000) to access the app locally.

## Contributing

We welcome contributions to enhance the app and improve its functionality. If you want to contribute, please follow these steps:

1. Fork the repository and create a new branch.

2. Make your changes and test thoroughly.

3. Submit a pull request, and we'll review your changes.

## Issues and Bug Reports

If you encounter any issues or find any bugs, please report them on the GitHub issues page: [https://github.com/DmGsOuNaK/NewsApp](https://github.com/DmGsOuNaK/NewsApp/issues)

## Credits

This project was developed by [Moudipa Jana](https://github.com/Moudipa01) & [Sounak Mandal](https://github.com/DmGsOuNaK)


## License

The News Aggregator App is open-source and distributed under the [MIT License](https://opensource.org/licenses/MIT).

---
Thank you for using our News Aggregator App! If you have any questions or need assistance, please feel free to contact us at moudipa.jana2020@vitstudent.ac.in or sounak.mandal2020@vitstudent.ac.in
