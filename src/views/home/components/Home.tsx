"use client";

import Breakline from "@/components/Elements/Breakline";
import Introduction from "./Introduction";
import About from "./About";
import Skills from "./Skills";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useSideActive } from "@/stores/useSideActive";

export default function Home() {
  const { sideActive, setSideActive } = useSideActive();
  const defaultOptions = {
    threshold: 0.5,
  };

  const introRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();

  const {
    ref: introInViewRef,
    inView: introInView,
    entry: introEntry,
  } = useInView(defaultOptions);

  const {
    ref: aboutInViewRef,
    inView: aboutInView,
    entry: aboutEntry,
  } = useInView(defaultOptions);

  const {
    ref: skillInViewRef,
    inView: skillInView,
    entry: skillEntry,
  } = useInView(defaultOptions);

  useEffect(() => {
    setSideActive({
      home: introInView,
      about: aboutInView,
      skill: skillInView,
    });
  }, [introInView, aboutInView, skillInView, setSideActive]);

  return (
    <>
      <Introduction sectionRef={introInViewRef} />
      <Breakline className="my-6" />
      <About sectionRef={aboutInViewRef} />
      <Breakline className="my-6" />
      <Skills sectionRef={skillInViewRef} />
    </>
  );
}
