export default function Contact() {
  return (
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
          <a href="https://github.com/akasHSarode" target="blank">github.com/akasHSarode</a>
        </span>
      </div>
    </section>
  );
}