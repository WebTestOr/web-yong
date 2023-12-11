// ChatGpt.js
import React, { useState } from "react";
import Header from "../components/Header/Header";
import { HeaderBorder } from "../components/Header/Component";
import {
  GptBox,
  GptBtn1,
  GptBtn2,
  GptBtn3,
  GptBtn4,
  GptContainer,
  GptContext,
  GptMainBox,
  GptTitle,
} from "../components/Chatgpt/gptcomponent";
import AppGptChat from "./AppGptChat";

export default function ChatGpt() {
  const [selectedBtnText, setSelectedBtnText] = useState("");

  const handleBtnClick = (btnText) => {
    setSelectedBtnText(btnText);
  };

  return (
    <>
      <Header transparent />
      <HeaderBorder />

      <GptMainBox>
        <GptContainer>
          <GptTitle>
            Chat Gpt에게 <br />
            <br />
            질문하세요!
          </GptTitle>
          <GptContext>질문 가이드</GptContext>
          <GptBtn1
            onClick={() => handleBtnClick("이번 겨울에 갈 곳 추천해줘!")}
          >
            이번 겨울에 갈 곳 추천해줘!
          </GptBtn1>
          <GptBtn2
            onClick={() =>
              handleBtnClick(
                "한국 국내여행으로 100만원 예산으로 떠날 수 있는 여행지 추천해줘!"
              )
            }
          >
            한국 국내여행으로 100만원 예산으로 떠날 수 있는 여행지 추천해줘!
          </GptBtn2>
          <GptBtn3
            onClick={() =>
              handleBtnClick(
                "가족과 함께 할 수 있는 겨울 휴가지 어디가 좋을까요?"
              )
            }
          >
            가족과 함께 할 수 있는 겨울 휴가지 어디가 좋을까요?
          </GptBtn3>
          <GptBtn4
            onClick={() =>
              handleBtnClick(
                "겨울 스포츠를 즐기고 싶어요. 어떤 여행지가 추천되나요?"
              )
            }
          >
            겨울 스포츠를 즐기고 싶어요. 어떤 여행지가 추천되나요?
          </GptBtn4>
        </GptContainer>
        <GptBox>
          <AppGptChat selectedBtnText={selectedBtnText} />
        </GptBox>
      </GptMainBox>
    </>
  );
}
