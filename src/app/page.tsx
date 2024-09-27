
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import NewMovie from "./components/newMovie/newMovie";
import PromoBanner from "./components/promoBanner/promoBanner";
import WeeklyTop from "./components/weeklyTop/weeklyTop";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <NewMovie/>
    <PromoBanner/>
    <WeeklyTop/>
    <Footer/>
    </>
  );
}
