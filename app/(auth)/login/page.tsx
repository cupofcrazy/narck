'use client'

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { signInWithTwitter, signInWithTwitch, signInWithGithub } from "@/server/actions/auth";

const MotionButton = motion.create(Button)

const variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: (custom: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: custom * 0.025,
    } 
  })
}

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <MotionButton variant="custom" variants={variants} initial="hidden" animate="visible" custom={0} onClick={signInWithGithub}>Login with Github</MotionButton>
        <MotionButton variant="custom" variants={variants} initial="hidden" animate="visible" custom={1} onClick={signInWithTwitter}>Login with Twitter</MotionButton>
        <MotionButton variant="custom" variants={variants} initial="hidden" animate="visible" custom={2} onClick={signInWithTwitch}>Login with Twitch</MotionButton>
      </div>
    </div>
  )
}