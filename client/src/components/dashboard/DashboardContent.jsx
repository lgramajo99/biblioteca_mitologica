import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/reducers/articleReducer";
import ElementListPosts from "../admin/ElementListPosts";

function DashboardContent() {
    const { data, status, error } = useSelector(state => state.article);
    const displayedMenu = useSelector(state => state.admin.displayedMenu)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);


    return (
        <section className={`bg-slate-300 container w-full h-screen  ${displayedMenu ? "ml-80" : "ml-20"}`}>
            <h1 className="text-center" > Bashboard de los BM</h1 >



        </section >
    )
}

export default DashboardContent;