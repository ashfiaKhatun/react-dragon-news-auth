import { useLoaderData } from "react-router-dom";
import BreakingNews from "../shared/Header/BreakingNews";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* news container */}
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}>

                        </NewsCard>)
                    }
                </div>

                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;