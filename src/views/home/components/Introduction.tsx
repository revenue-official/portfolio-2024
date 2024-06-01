import TypingAnimation from '@/components/Elements/TypingAnimation';

export default function Introduction() {
  const phrases = ["Hello, I'm ", 'Teguh Ersyarudin', 'Fullstack Developer'];
  const nonDeletableIndices = [0];
  return (
    <section className="flex flex-col">
      <TypingAnimation
        phrases={phrases}
        typingSpeed={50}
        deletingSpeed={30}
        delayAfterTyping={3000}
        delayAfterDeleting={3000}
        nonDeletableIndices={nonDeletableIndices}
        className="h-20 pt-10 font-poppins text-lg font-bold text-black dark:text-white md:text-3xl"
      />
      <div className="flex h-fit md:mb-4">
        <ul className="font-comfortaa block list-inside list-disc gap-4 md:flex">
          {/* betikan dot/bulatan  */}
          <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
            IT student
          </li>
          <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Based in Indonesia
          </li>
        </ul>
      </div>
      <div className="mb-4 mt-8 flex h-fit">
        <span className="font-quicksand font-medium leading-8 text-neutral-800 dark:text-neutral-200">
          An experienced web development junior with fullstack skills. I am quite proficient in
          using Laravel and Nextjs technology. I have knowledge in PHP and Typescript to develop web
          application functionality. Im excited to contribute to the team to build efficient,
          responsive, and visually appealing web applications.
        </span>
      </div>
    </section>
  );
}
