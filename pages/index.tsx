import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Akash Sarode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<ul id="navMenu" className="">
					<li className="nav-link">
						<a href="#about" className="nav-btn active">About</a>
					</li>
					<li className="nav-link">
						<a href="#work" className="nav-btn">Work</a>
					</li>
					<li className="nav-link">
						<a href="#contact" className="nav-btn">Contact</a>
					</li>
				</ul>
			</nav>

			<main className="">

				<div className="">
					<ul className="text-white">
						<li className="">
							<a href="#about" className="">Abbout</a>
						</li>
						<li className="">
							<a href="#work" className="">Work</a>
						</li>
						<li className="">
							<a href="#contact" className="">Contact</a>
						</li>
					</ul>
				</div>

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

				<section id="work" className="section-main">
					<div className="text-lg md:text-xl lg:font-semibold md:w-3/4 xl:w-2/4 mx-auto leading-8">
						<div className="experience">
							I have been working as a Full Stack Web Developer for just over two years now.
							I primarily use Javascript, Dart and PHP but picking up a
							new framework isn&apos;t a problem. I&apos;m comfortable developing on frontend or
							backend as well as setting up or managing infrastructure. Here are some of the
							technologies I have experience working with.
						</div>

						<div className="skills">
							<div className="skill-wrapper">
								<div className="skill-list-tile">
									<span className="skill-title">Frontend - Flutter, ReactJs</span>
									<span className="skill-leading">
										For the past six months, I&apos;ve been developing a web app with flutter.
									</span>
								</div>
							</div>
							<div className="skill-wrapper">
								<div className="skill-list-tile">
									<span className="title">Backend - Laravel, ExpressJs</span>
									<span className="skill-leading">
										This website is built using Laravel, I know it is overkill for a website like this
										but I plan on adding blog functionality for myself and users as well.
									</span>
								</div>
							</div>
							<div className="skill-wrapper">
								<div className="skill-list-tile">
									<span className="title ">MySQL, MongoDB, Firebase Realtime Database</span>
									<span className="skill-leading">
										I&apos;ve extensively worked with MySQL database.
									</span>
								</div>
							</div>
							<div className="skill-wrapper">
								<div className="skill-list-tile">
									<span className="title ">Materialize, Bootstrap, Tailwindcss</span>
									<span className="skill-leading">
										This is the first time I&apos;ve used tailwindcss, let me know how I&apos;m doing ;)
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="get-in-touch flex flex-col items-center">
						<a href="#contact">
							<svg className="get-in-touch-icon chevron-double-down w-10 animate-bounce text-green-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
						</a>
						<p className="text-xl font-semibold">Get in touch</p>
					</div>
				</section>

				<section id="contact" className="contact mt-20 md:mt-0 md:p-8 flex flex-col-reverse text-center md:flex-row justify-around items-center font-semibold">
					<div className="leave-message text-right">
						<span className="block mb-2 md:text-left font-semibold text-sm">Leave a message</span>
						<input className="block w-full mb-4 px-2 bg-gray-900 border-b-2 border-gray-500 focus:outline-none" type="text" placeholder="Name" />
						<textarea className="mb-2 px-2 bg-gray-900 border-b-2 border-gray-500 focus:outline-none" cols={40} rows={2} placeholder="Message"></textarea>
						<button
							className="border-2 border-green-600 block px-4 py-2 font-semibold rounded focus:outline-none hover:bg-green-600">Submit</button>
					</div>
					<div className="reach leading-7 mb-20 md:m-0 md:text-left">
						<span className="name uppercase text-xl">Akash Sarode</span>
						<span className="email block select-all">akashsarode6669@gmail.com</span>
						<span className="block cursor-pointer">
							<a href="https://www.instagram.com/akashsarode669/" target="blank">instagram.com/akashsarode669</a>
						</span>
					</div>
				</section>

				<a href="#about" className="absolute p-4 right-0 m-2">
					<svg className="w-8 text-green-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
				</a>
			</main>
		</div>
	)
}
