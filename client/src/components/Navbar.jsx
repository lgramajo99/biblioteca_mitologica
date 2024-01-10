    import SearchForm from './SearchForm';
    import { useDispatch, useSelector } from 'react-redux';
    import { adminActions } from '../redux/reducers/adminReducer';

    const Navbar = () => {
        const dispatch = useDispatch();

        const isOpenLogin = useSelector(state => state.admin.openLogin);

        const handleOpenLoginClick = () => { dispatch(adminActions.toggleOpenLogin()) };

        return (
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Brand */}
                    <div className="text-white font-bold text-xl">
                        B.M
                    </div>

                    {/* Search Form */}
                    <div className="flex items-center justify-center flex-grow">
                        <SearchForm />
                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-white">Inicio</a>
                        <a href="/directorio" className="text-white">Directorio</a>
                        <a href="/nosotros" className="text-white">Nosotros</a>
                        <a href='#' className='' onClick={handleOpenLoginClick}>
                            {
                                isOpenLogin ?
                                    < svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5" /> <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" /> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /> </g>
                                    </svg> :
                                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" /><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" /><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" /><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" /></svg>
                            }
                        </a>
                    </div>
                </div>
            </nav >
        );
    };

    export default Navbar;