export default function About() {
  return (
    <section id="about" className="section-main">
      <p className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center  lg:w-3/4">
        H<span className="text-green-500 inline">i</span>, I&apos;m Akash.
        I design & build web applications.
      </p>
      <div className="flex flex-col items-center">
        <a href="#work">
          <svg className="scroll-to-work-icon chevron-double-down w-10 animate-bounce text-green-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <p className="text-xl font-semibold">Learn more about what I do</p>
      </div>
    </section>
  );
}