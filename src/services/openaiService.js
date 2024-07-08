const OpenAI = require("openai");

const { getRooms , bookRoom } = require('./hotelService'); // Import the getRooms and bookRoom functions from the hotelService module

 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const functions = [
  {
    name: "get_rooms",
    description: "Get available hotel rooms",
    parameters: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "book_room",
    description: "Book a hotel room",
    parameters: {
      type: "object",
      properties: {
        roomId: { type: "number" },
        fullName: { type: "string" },
        email: { type: "string" },
        nights: { type: "number" },
      },
      required: ["roomId", "fullName", "email", "nights"],
    },
  },
];

async function getChatResponse(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      functions: functions,
      function_call: "auto",
    });

    const responseMessage = response.choices[0].message;

    if (responseMessage.function_call) {
      const functionName = responseMessage.function_call.name;
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);

      let functionResult;
      if (functionName === "get_rooms") {
        functionResult = await getRooms();
      } else if (functionName === "book_room") {
        functionResult = await bookRoom(
          functionArgs.roomId,
          functionArgs.fullName,  
          functionArgs.email,
          functionArgs.nights
        );
      }

      messages.push(responseMessage);
      messages.push({
        role: "function",
        name: functionName,
        content: JSON.stringify(functionResult),
      });

      return getChatResponse(messages);
    } else {
      return responseMessage.content;
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

module.exports = { getChatResponse };