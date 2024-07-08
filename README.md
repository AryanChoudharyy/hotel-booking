# Hotel Booking Chatbot

This project is a hotel booking chatbot that uses AI to assist users with their hotel-related inquiries and bookings.

## Important Note

This project has not been deployed yet. However, you can visit the following link to see a demonstration of how the chatbot functions:

Hotel booking chatbot demo --> https://youtu.be/-oysHS6RmwY

Please note that the demo is for visualization purposes only. To run and test the actual project, follow the setup instructions below.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node.js (version 14.0 or later)
* You have a Windows/Linux/Mac machine
* You have installed npm (usually comes with Node.js)
* You have installed Postman (for API testing)

## Setting Up the Project

To set up the Hotel Booking Chatbot, follow these steps:

1. Clone the repository
2. Install the dependencies
3. Create a `.env` file in the root directory and add your OpenAI API key:


## Running the Project

To run the Hotel Booking Chatbot, follow these steps:

1. Start the backend server
The server should start running on `http://localhost:3000`.

Since the project hasn't been deployed yet, you can use Postman to test the API endpoints:

1. Open Postman
2. Create a new POST request
3. Set the URL to `http://localhost:3000/chat`
4. Set the headers:
- Key: `Content-Type`
- Value: `application/json`
5. In the body tab, select 'raw' and 'JSON', then enter a request body like this:
```json
{
  "message": "Hello, I'd like to book a room",
  "sessionId": null
}


MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
