import React from "react";
import Header from "../components/Header/Header";
import { HeaderBorder } from "../components/Header/Component";
import { GptBox, GptContext, GptTitle } from "../components/Chatgpt/gptcomponent";
import AppGptChat from "./AppGptChat";

export default function ChatGpt (){
    return(
    <>
    <Header transparent/>
    <HeaderBorder/>
    <GptTitle>
        Chat Gpt에게 <br/><br/>
        질문하세요!
    </GptTitle>
    <GptContext>질문 가이드</GptContext>
    <GptBox>
        <AppGptChat/>
    </GptBox>
    </>
    );
}