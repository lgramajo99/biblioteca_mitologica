import { useSelector } from "react-redux";
import { useAdminActions } from "../../redux/actions/adminAction";
import { moon, sun } from '../../assets/index';

function DarkModeSwitchButton() {
    const { themeChangeMode } = useSelector(state => state.admin);
    const { handleThemeMode } = useAdminActions();

    return (
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    id="toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={themeChangeMode}
                    onChange={handleThemeMode}
                />

                <button
                    type="button"
                    className={`flex items-center justify-between text-start w-16 h-8 bg-gray-300 rounded-full p-1 focus:outline-none ${themeChangeMode ? 'bg-blue-600' : ''}`}
                    onClick={handleThemeMode}
                >
                    <div className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-transform transform ${themeChangeMode ? 'translate-x-full' : ''}`}>
                        <img src={themeChangeMode ? sun : moon} alt={themeChangeMode ? "Sun" : "Moon"} className="w-4 h-4" />
                    </div>
                </button>
            </div>
        </label>
    );
}

export default DarkModeSwitchButton;
