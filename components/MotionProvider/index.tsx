"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

export const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);
