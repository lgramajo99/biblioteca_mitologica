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
                    className={`flex items-center justify-between w-16 h-8 bg-blue-600 rounded-full  focus:outline-none dark:bg-gray-300`}
                    onClick={handleThemeMode}
                >
                    <div className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-transform transform dark:translate-x-full`}>
                        <img src={themeChangeMode ? moon : sun} alt={themeChangeMode ? "Sun" : "Moon"} className="w-4 h-4" />
                    </div>
                </button>
            </div>
        </label>
    );
}

export default DarkModeSwitchButton;
