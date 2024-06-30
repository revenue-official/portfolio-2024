"use client";

import dynamic from "next/dynamic";
import Introduction from "./Introduction";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollStore } from "@/stores/useScrollStore";

//dynamic importteds
const About = dynamic(() => import("./About"));
const Skills = dynamic(() => import("./Skills"));

export default function Home() {
  const { setSectionRef } = useScrollStore();

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
