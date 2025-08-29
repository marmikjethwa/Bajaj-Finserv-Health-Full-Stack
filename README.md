# Bajaj-Finserv-Health-Full-Stack
This is For Bajaj Finserv Health Company Full Stack Project
Of course. Here's a user-friendly and professional README description for your project. You can copy and paste this into a new file named README.md in your project's root directory.

Bajaj Finserv Health - Full Stack API Challenge 🚀
This project is a simple yet robust REST API developed as part of the Bajaj Finserv Health Full Stack hiring challenge. The API processes an array of mixed data types and returns a structured JSON response categorizing the contents.

✨ Features
Data Categorization: Sorts an incoming array into even numbers, odd numbers, and alphabets.

Calculations: Calculates the sum of all numeric values in the array.

String Manipulation: Concatenates all alphabetic characters, reverses them, and applies alternating capitalization.

Static User Info: Includes predefined user details in every successful response.

🛠️ Tech Stack
Backend: Node.js

Framework: Express.js

🔌 API Endpoint
The API exposes a single endpoint to handle all data processing.

Method: POST

URL: /bfhl

Live URL: https://your-hosted-api-url.com/bfhl (Replace with your deployed URL)

Request Body
The API expects a JSON object with a single key, data, which holds an array of strings.

Example Request:

JSON

{
    "data": ["a", "1", "334", "4", "R", "$"]
}
Success Response
For a valid request, the API will return a 200 OK status with the following JSON structure:

Example Response:

JSON

{
    "is_success": true,
    "user_id": "marmik_jethwa_10102004",
    "email": "marmikjethwa@gmail.com",
    "roll_number": "22BCE0825",
    "odd_numbers": [
        "1"
    ],
    "even_numbers": [
        "334",
        "4"
    ],
    "alphabets": [
        "A",
        "R"
    ],
    "special_characters": [
        "$"
    ],
    "sum": "339",
    "concat_string": "Ra"
}
🏃‍♂️ How to Run Locally
To get this project running on your own machine, follow these simple steps.

Clone the repository:

Bash

git clone https://github.com/marmikjethwa/Bajaj-Finserv-Health-Full-Stack.git
Navigate to the project directory:

Bash

cd Bajaj-Finserv-Health-Full-Stack
Install dependencies:

Bash

npm install
Start the server:

Bash

npm start
The server will be up and running on http://localhost:3000. You can now test the /bfhl endpoint using an API client like Postman or Thunder Client!
