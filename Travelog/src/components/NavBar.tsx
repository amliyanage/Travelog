import search_icon from '../assets/search_icon.png'
import account_icon from '../assets/account_icon.png'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <header>
            <nav className='flex justify-around mt-10 items-center'>
                <div className='flex gap-4 font-logo items-center'>
                    <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                    <h1 className='font-logo font-bold text-[40px]'>Travelog</h1>
                </div>
                <ul className='flex gap-8 text-[18px] font-normal'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <div className='flex gap-8'>
                    <div className='flex relative'>
                        <input type="text" className='bg-white/75 border-0 rounded-xl w-[257px]' />
                        <img src={search_icon} alt="Search" className='w-[20px] h-[20px] absolute right-2 top-2' />
                    </div>
                    <img src={account_icon} alt="account" className='w-[40px] h-[40px]' />
                </div>
            </nav>
        </header>
    )
}   

export default NavBar;