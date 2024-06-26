export function Configure() {
  return {
    organization: process.env.ORG_ID || "",
    platform: process.env.PLATFORM || "openai",
    baseUrl: process.env.BASE_URL || "",
    stream: true,
    apiKey: "",
    model: "gpt-3.5-turbo-16k",
    accessToken: "",
    systemPrompt:
      "I'm here to help you in the onboarding process, Let's start with your name. Can you provide your name ?",
    temperature: 1,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
  };
}

export const PROJECT_CONFIG_STORE = "GETSOMEPROMPT_CONFIG";

export const USER_ROLE = {
  SYSTEM: "system",
  USER: "user",
  ASSISTANT: "assistant",
};
