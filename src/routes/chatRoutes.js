const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getChatResponse } = require('../services/openaiservice');
const Conversation = require('../models/conversation');

router.post('/', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    let conversation;

    if (sessionId) {
      conversation = await Conversation.findOne({ where: { sessionId } });
    }

    if (!conversation) {  
      const newSessionId = uuidv4();
      conversation = await Conversation.create({
        sessionId: newSessionId,
        messages: JSON.stringify([{ role: 'system', content: 'You are a helpful assistant for hotel bookings.' }])
      });
    }

    const messages = JSON.parse(conversation.messages);
    messages.push({ role: 'user', content: message });

    const response = await getChatResponse(messages);
    
    messages.push({ role: 'assistant', content: response });
    await conversation.update({ messages: JSON.stringify(messages) });

    res.json({ response, sessionId: conversation.sessionId });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

module.exports = router;