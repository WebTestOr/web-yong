// 출처 - 웹개발응용 13주차 강의 교안 활용
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

export { chat };
