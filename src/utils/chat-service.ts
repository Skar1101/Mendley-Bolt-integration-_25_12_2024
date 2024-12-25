import OpenAI from 'openai';
import { CHAT_PROMPTS } from '../prompts/chat-prompts';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!API_KEY) {
  console.warn('OpenAI API key is missing. Chat functionality will be limited.');
}

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getChatResponse(message: string, mode: string) {
  if (!message) {
    throw new Error('Message is required');
  }

  if (!API_KEY) {
    return "I'm currently in demo mode and can't process messages. Please add your OpenAI API key to enable full functionality.";
  }

  try {
    // Get the correct prompt based on mode
    const prompt = CHAT_PROMPTS[mode as keyof typeof CHAT_PROMPTS];
    
    if (!prompt) {
      console.warn(`Invalid chat mode: ${mode}, falling back to Friendly Chat`);
      // Fallback to Friendly Chat if mode not found
      mode = 'Friendly Chat';
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: CHAT_PROMPTS[mode as keyof typeof CHAT_PROMPTS] },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    if (!response.choices[0]?.message?.content) {
      throw new Error('No response received from OpenAI');
    }

    return response.choices[0].message.content;
  } catch (error: any) {
    console.error('OpenAI API Error:', error?.message || error);
    
    // Return user-friendly error message
    if (error?.status === 401) {
      return "I'm having trouble connecting to my brain. Please check if the API key is valid.";
    } else if (error?.status === 429) {
      return "I'm a bit overwhelmed right now. Please try again in a moment.";
    } else {
      return "I apologize, but I'm having trouble processing your message right now. Please try again.";
    }
  }
}