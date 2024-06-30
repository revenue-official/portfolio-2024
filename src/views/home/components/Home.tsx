"use client";

import dynamic from "next/dynamic";
import Introduction from "./Introduction";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollStore } from "@/stores/useScrollStore";

//dynamic importteds
const About = dynamic(() => import("./About"));
const Skills = dynamic(() => import("./Skills"));
const Services = dynamic(() => import("./Services"));

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

  const {
    ref: serviceInViewRef,
    inView: serviceInView,
    entry: serviceEntry,
  } = useInView(defaultOptions);

  useEffect(() => {
    setSectionRef("home", introEntry);
    setSectionRef("about", aboutEntry);
    setSectionRef("skill", skillEntry);
    setSectionRef("service", serviceEntry);
  }, [introEntry, aboutEntry, skillEntry, serviceEntry, setSectionRef]);

  return (
    <>
      <Introduction sectionRef={introInViewRef} />
      <About sectionRef={aboutInViewRef} />
      <Skills sectionRef={skillInViewRef} />
      <Services sectionRef={serviceInViewRef} />
    </>
  );
}
