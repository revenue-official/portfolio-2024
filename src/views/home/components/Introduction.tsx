
import TypingAnimation from "@/components/Elements/TypingAnimation";

export default function Introduction() {
    const phrases = ["Hello, I'm ", "Teguh Ersyarudin", "Fullstack Developer"];
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
                className="h-20 pt-10 text-lg font-bold text-black md:text-3xl font-poppins dark:text-white"
            />
            <div className="flex md:mb-4 h-fit">
                <ul className="block gap-4 list-disc list-inside md:flex font-comfortaa">
                    {/* betikan dot/bulatan  */}
                    <li className="text-sm font-medium font-poppins text-neutral-600 dark:text-neutral-400">IT student</li>
                    <li className="text-sm font-medium font-poppins text-neutral-600 dark:text-neutral-400">Based in Indonesia</li>
                </ul>
            </div>
            <div className="flex mt-8 mb-4 h-fit">
                <span className="font-medium leading-8 font-quicksand text-neutral-800 dark:text-neutral-200">
                    An experienced web development junior with fullstack skills. I am quite proficient in using Laravel and Nextjs technology. I have knowledge in PHP and Typescript to develop web application functionality. Im excited to contribute to the team to build efficient, responsive, and visually appealing web applications.
                </span>
            </div>
        </section>
    );
}