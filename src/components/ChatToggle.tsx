"use client";

import { Button } from "@/components/ui/button";
import { Bot, BotOff } from "lucide-react";

const ChatToggle = () => {
  // TODO: implement chatbot

  return (
    <Button size="icon" variant="ghost">
      <Bot />
    </Button>
  );
};

export default ChatToggle;
