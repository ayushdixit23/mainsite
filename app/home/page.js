import React from "react";
import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import Chat from "../Components/chat";
import Community from "../Components/Community";
import Question from "../Components/Question";

function page() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Chat />
      <Community />
      <Question />
    </div>
  );
}

export default page;
