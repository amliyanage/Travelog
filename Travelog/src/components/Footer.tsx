const Footer = () => {
    return(
        <footer className="text-white py-20 mt-35 px-30 flex justify-between border-t-1 border-[#FBD784]/20">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-[30px] font-logo font-bold">Travelog</h1>
                    <p className="text-[18px] font-body mt-6">Get out there & discover your next <br /> slope, mountain & destination!</p>
                </div>
                <h2 className="text-[18px] font-body opacity-20">Copyright 2025 Ashen, Inc. Terms & Privacy</h2>
            </div>
            <div className="flex gap-60">
                <div>
                    <h3 className="text-[20px] font-body font-bold mb-6" style={{color: "#FBD784"}}>More on The Blog</h3>
                    <ul className="flex flex-col gap-4 font-body text-[16px]">
                        <li>About MNTN</li>
                        <li>Contributors & Writers</li>
                        <li>Write For Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[20px] font-body font-bold mb-6" style={{color: "#FBD784"}}>More on MNTN</h3>
                    <ul className="flex flex-col gap-4 font-body text-[16px]">
                        <li>The Team</li>
                        <li>Jobs</li>
                        <li>Press</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer