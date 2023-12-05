import axios from 'axios';

const chat = async (prompt, onMessage) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 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',
  };
  const messages = [{ role: 'user', content: prompt }];

  console.log('=>', prompt);
  axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        messages: messages,
      },
      { headers, timeout: 600000 }
    )
    .then((response) => {
      console.log(response.data.choices[0].message.content);
      onMessage(response.data.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
      onMessage(err.message);
    });
};

const chatHistory = async (prompt, messages, onMessage) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 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',
  };
  console.log('과거기역 : ', messages);
  console.log('질의 : ', prompt);
  const gg = [...messages, { role: 'user', content: prompt }];
  console.log('메시지 : ', gg);

  axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        messages: gg,
      },
      { headers, timeout: 15000 }
    )
    .then((response) => {
      console.log('응답 : ', response.data.choices[0].message.content);
      onMessage(response.data.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
      onMessage(err.message);
    });
};

const dalle = async (prompt, onMessage, n = 1, size = '256x256') => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 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',
  };

  axios
    .post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: prompt,
        n: n,
        size: size,
      },
      { headers, timeout: 10000 }
    )
    .then((response) => {
      console.log(response);
      onMessage(response.data.data);
    })
    .catch(console.log);
};

export { chat, chatHistory, dalle };
