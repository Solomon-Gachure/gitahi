  import React, {useEffect} from 'react'
  import AOS from 'aos'
  import 'aos/dist/aos.css';
  const About = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <div name='about' className='pt-16 h-full  text-white bg-stone-900'>
        <div className='flex items-center justify-center p-4 pt-10 '>
  <p className='font-mono md:text-xl max-w-4xl '><span className='text-2xl md:text-5xl font-extrabold' data-aos="fade-right">Salut!👋🏾</span> <br/> 
    <span className='text-xl md:text-2xl'><b className='text-amber-300'>Solomon Gachure</b> here, however you can call me Solomon!</span><br/>
    As a software engineer of two years specializing in the frontend domain, I bring a wealth of knowledge and experience to the table. My proficiency extends to cutting-edge technologies like <b>React, Next.js, and Tailwind CSS</b>, allowing me to create dynamic and responsive web applications.

  What sets me apart is not only my technical acumen but also my commitment to collaboration,teamwork and effective communication.<br/>
  <br/>

  As a frontend professional, I am driven by a passion for user-centric design, striving to create interfaces that not only meet but exceed user expectations, delivering superb user experiences. Whether in the fast-paced world of deadlines or the ever-evolving tech landscape, I approach challenges with professionalism, a strong work ethic, and an unwavering commitment to excellence.
    
    </p>
        </div>
      </div>
    )
  }

  export default About