import React from "react";
import Header from "../components/Header/Header";
import { HeaderBorder } from "../components/Header/Component";
import { GptBox, GptBtn1, GptBtn2, GptBtn3, GptBtn4, GptContainer, GptContext, GptTitle } from "../components/Chatgpt/gptcomponent";
import AppGptChat from "./AppGptChat";

export default function ChatGpt (){
    return(
    <>
    <Header transparent/>
    <HeaderBorder/>
    <GptContainer>
    <div className="GptLeftBox">
    <GptTitle>
        Chat Gpt에게 <br/><br/>
        질문하세요!
    </GptTitle>
    <GptContext>질문 가이드</GptContext>
    <GptBtn1>이번 겨울에 갈 곳 추천해줘!</GptBtn1>
    <GptBtn2>2</GptBtn2>
    <GptBtn3>3</GptBtn3>
    <GptBtn4>4</GptBtn4>
    </div>
    <GptBox>
        <AppGptChat/>
    </GptBox>
    </GptContainer>
    </>
    );
}