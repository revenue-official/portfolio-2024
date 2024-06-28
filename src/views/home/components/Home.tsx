"use client";

import About from "./About";
import Skills from "./Skills";
import Introduction from "./Introduction";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollStore } from "@/stores/useScrollStore";

export default function Home() {
  const setSectionRef = useScrollStore((state) => state.setSectionRef);

  const defaultOptions = {
    threshold: 0.5,
  };

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
    setSectionRef("home", introEntry);
    setSectionRef("about", aboutEntry);
    setSectionRef("skill", skillEntry);
  }, [introEntry, aboutEntry, skillEntry, setSectionRef]);

  return (
    <>
      <Introduction sectionRef={introInViewRef} />
      <About sectionRef={aboutInViewRef} />
      <Skills sectionRef={skillInViewRef} />
    </>
  );
}
