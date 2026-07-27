"use client";

import { domAnimation, LazyMotion } from "framer-motion";

export const MotionProvider = ({ children }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);
