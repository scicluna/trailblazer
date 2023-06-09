//add your pictures 
import ryanpic from "../assets/imgs/RDM wedding edit.jpg";
import johnpic from "../assets/imgs/me3.webp";
import jacobpic from "../assets/imgs/jacob.webp";
import damianpic from "../assets/imgs/damian.png"

//create a Contact page that gives information about the team and how to contact us!  be a bit creative here, and be able to have users have a button that can send emails given the provided email in the team member's profile.

export default function ContactUs() {
  return (
    <>
      <section className="flex flex-col justify-around items-center bg-gray-100 p-5" style={{ minHeight: '90vh' }}>
        <h2 className="text-align-center text-3xl font-bold text-gray-700 flex justify-center pt-4">Meet the Team!</h2>
        <div className="bg-gray-100 flex flex-col gap-5 w-full justify-center items-center ">
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-5">
            <div className="rounded md:overflow-y-scroll shadow-lg flex flex-col p-2 gap-3 h-96">
              <img className="w-full object-contain h-3/6" src={johnpic} alt="John self" />
              <h1 className="font-bold text-xl">John Scicluna</h1>
              <p className="text-gray-700 text-base h-full overflow-auto">
                I am John Scicluna, a meticulous full stack developer with an unwavering commitment to delivering user-centric solutions. I welcome any opportunities to engage in interesting coding discussions or potential project collaborations.
              </p>
              <div className="h-1/8 flex justify-center gap-5">
                <a href="https://github.com/scicluna" target="_blank" rel="noreferrer" className=" bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gray-400">John's Github</a>
                <a href="mailto:sciclunajl@gmail.com" target="_blank" rel="noreferrer" className=" bg-gray-200 rounded-full  text-sm font-semibold text-gray-700 hover:text-gray-400">Contact John!</a>
              </div>
            </div>
            <div className="rounded md:overflow-y-scroll shadow-lg flex flex-col p-2 gap-3 h-96">
              <img className="w-full object-contain h-3/6" src={jacobpic} alt="Jacob self" />
              <h1 className="font-bold text-xl">Jacob Jeffries</h1>
              <p className="text-gray-700 text-base h-full overflow-auto">
                Hello, my name is Jacob. I've been trained in various disciplines: web application development, laboratory management, and biological research.
                Throughout my youth and professional path I have used computers to increase my efficacy and to have fun!
              </p>
              <div className="h-1/8 flex justify-center gap-5">
                <a href="https://github.com/Jacob-Jeffries" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700  hover:text-gray-400">Jacob's Github</a>
                <a href="mailto:jeffries.info@gmail.com" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full  text-sm font-semibold text-gray-700  hover:text-gray-400">Contact Jacob!</a>
              </div>
            </div>
            <div className="rounded md:overflow-y-scroll shadow-lg flex flex-col p-2 gap-3 h-96">
              <img className="w-full object-contain h-3/6" src={damianpic} alt="Ryan Mennemeier self" />
              <h1 className="font-bold text-xl">Damian Galus</h1>
              <p className="text-gray-700 text-base h-full overflow-auto">
                Hey, name is Damian, I am a Full Stack Developer based out of Michigan. I enjoy keeping up with the latest industry trends and technologies,
                and I am always looking for ways to improve my skills and knowledge. When I'm not coding, you can find me in the great outdoors or spending time with friends and family.
              </p>
              <div className="h-1/8 flex justify-center gap-5">
                <a href="https://github.com/DFgalus" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700  hover:text-gray-400">Damian's Github</a>
                <a href="mailto:damiangdev@gmail.com" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full  text-sm font-semibold text-gray-700 hover:text-gray-400">Contact Damian!</a>
              </div>
            </div>
            <div className="rounded md:overflow-y-scroll shadow-lg flex flex-col p-2 gap-3 h-96" >
              <img className="w-full object-contain h-3/6" src={ryanpic} alt="Ryan Mennemeier self" />
              <h1 className="font-bold text-xl">Ryan Mennemeier</h1>
              <p className="text-gray-700 text-base h-full overflow-auto">
                Hi! I'm Ryan, a full stack developer with a passion for learning and creating things. I'm currently looking for a position in the software industry. Feel free to reach out to me if you have any questions!
              </p>
              <div className="h-1/8 flex justify-center gap-5">
                <a href="https://github.com/Taliwat" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:text-gray-400">Ryan's Github</a>
                <a href="mailto:kalpha1865@gmail.com" target="_blank" rel="noreferrer" className=" inline-block bg-gray-200 rounded-full  text-sm font-semibold text-gray-700 hover:text-gray-400">Contact Ryan!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
};
