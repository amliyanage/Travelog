import blog_img_1 from '../assets/blog-1.png'
import blog_img_2 from '../assets/blog-2.png'

const About = () => {
    return (
        <section className="px-30">
            <div className='absolute right-30 bottom-[-10vh] flex gap-[25px]'>
                <div className='w-[395px] h-[315px] bg-[#5EBBFF]/42 backdrop-blur-[2px] p-[45px] border-2 border-[#5EBBFF] rounded-[20px] flex flex-col justify-center items-start'>
                    <h3 className='font-body font-bold text-[34px] border-b-3 border-[#E3E3E3] pb-3 w-full'>Top Destinations</h3>
                    <p className='font-body text-[20px] mt-[14px]'>Explore over 600 destinations for your adventure.</p>
                </div>
                <div className='w-[395px] h-[315px] bg-[#BBDFF9]/42 backdrop-blur-[2px] p-[45px] border-2 border-[#BBDFF9] rounded-[20px] flex flex-col justify-center items-start'>
                    <h3 className='font-body font-bold text-[34px] border-b-3 border-[#E3E3E3] pb-3 w-full'>Global Escapes</h3>
                    <p className='font-body text-[20px] mt-[14px]'>Discover unforgettable places and start your journey.</p>
                </div>
                <div className='w-[395px] h-[315px] bg-[#BBDFF9]/42 backdrop-blur-[2px] p-[45px] border-2 border-[#BBDFF9] rounded-[20px] flex flex-col justify-center items-start'>
                    <h3 className='font-body font-bold text-[34px] border-b-3 border-[#E3E3E3] pb-3 w-full'>Travel Guide</h3>
                    <p className='font-body text-[20px] mt-[14px]'>Find your next destination and travel today.</p>
                </div>
            </div>
            <div className='flex w-full items-center flex-col '>
                <div className="mt-50 flex gap-50 h-auto items-center">
                    <div className="font-body relative w-full -top-30">
                        <div className='flex w-full'>
                            <span className="text-[220px] font-bold text-white/35 opacity-10 leading-0.5" >01</span>
                        </div>
                        <div className="absolute left-32 top-0">
                            <div className="flex items-center gap-5">
                                <hr className="w-[72px] h-[2px] border-[#FBD784]" />
                                <span className="text-[18px] font-normal" style={{ color : '#FBD784' }}>GET STARTED</span>
                            </div>
                            <h1 className="text-[54px] leading-13 font-nomal mt-3">What level of  hiker <br /> are you?</h1>
                            <p className="w-[600px] text-[18px] mt-5 leading-7 font-light">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                            Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
                            </p>
                            <button className="mt-5 flex gap-5 items-center">
                                <span style={{ color : '#FBD784' }} className="text-[18px] font-normal tracking-wide">read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                    <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='h-[30vw] w-[50vw] flex justify-center items-center'>
                        <img src={blog_img_1} alt="blog image 01" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className="mt-50 flex gap-50 h-auto items-center">
                    <div className='h-[30vw] w-[50vw] flex justify-center items-center'>
                        <img src={blog_img_2} alt="blog image 01" className='w-full h-full object-cover' />
                    </div>
                    <div className="font-body relative w-full -top-30">
                        <div className='flex w-full'>
                            <span className="text-[220px] font-bold text-white/35 opacity-10 leading-0.5" >02</span>
                        </div>
                        <div className="absolute left-32 top-0">
                            <div className="flex items-center gap-5">
                                <hr className="w-[72px] h-[2px] border-[#FBD784]" />
                                <span className="text-[18px] font-normal uppercase" style={{ color : '#FBD784' }}>Hiking Essentials</span>
                            </div>
                            <h1 className="text-[54px] leading-15 font-nomal mt-3">Picking the right <br /> Hiking Gear!</h1>
                            <p className="w-[600px] text-[18px] mt-5 leading-7 font-light">Determining what level of hiker you are can be an important tool when planning future hikes. 
                                This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker.
                                What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?  
                            </p>
                            <button className="mt-5 flex gap-5 items-center">
                                <span style={{ color : '#FBD784' }} className="text-[18px] font-normal tracking-wide">read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                    <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-50 flex gap-50 h-auto items-center">
                    <div className="font-body relative w-full -top-30">
                        <div className='flex w-full'>
                            <span className="text-[220px] font-bold text-white/35 opacity-10 leading-0.5" >03</span>
                        </div>
                        <div className="absolute left-32 top-0">
                            <div className="flex items-center gap-5">
                                <hr className="w-[72px] h-[2px] border-[#FBD784]" />
                                <span className="text-[18px] font-normal uppercase" style={{ color : '#FBD784' }}>where you go is the key</span>
                            </div>
                            <h1 className="text-[54px] leading-13 font-nomal mt-3">Understand Your <br /> Map & Timing</h1>
                            <p className="w-[600px] text-[18px] mt-5 leading-7 font-light">
                            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
                            </p>
                            <button className="mt-5 flex gap-5 items-center">
                                <span style={{ color : '#FBD784' }} className="text-[18px] font-normal tracking-wide">read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                    <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='h-[30vw] w-[50vw] flex justify-center items-center'>
                        <img src={blog_img_1} alt="blog image 01" className='w-full h-full object-cover' />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About