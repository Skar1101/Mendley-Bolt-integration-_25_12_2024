import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// Chat prompts for different modes
const PROMPTS = {
  'Friendly Chat': `
You are Ana, a friendly and empathetic AI companion. Your responses should:
- Be warm, natural and conversational
- Show genuine interest in the user's thoughts and feelings
- Keep responses concise (2-3 sentences max)
- Use a casual but respectful tone
- Avoid giving medical advice
- Focus on emotional support and understanding
`,
  'Guided Journey': `
You are Ana, a supportive guide helping users explore their emotions. Your responses should:
- Be structured and gently directive
- Ask thoughtful questions to promote self-reflection
- Keep responses focused and concise (2-3 sentences max)
- Maintain a professional yet warm tone
- Avoid medical advice
- Help users gain insights about their feelings
`
};

// Get AI response based on mode
export const getAIResponse = async (message: string, mode: 'Friendly Chat' | 'Guided Journey') => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: PROMPTS[mode] },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    return response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get AI response');
  }
};