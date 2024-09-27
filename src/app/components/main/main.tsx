import BannerForMovie from "@/app/components/bannerForMovie/bannerForMovie";
import PromoBannerForMovie from "@/app/components/promoBannerForMovie/promoBannerForMovie"
import SeasonalBlock from "@/app/components/seasonalBlock/seasonalBlock";
import AboutMovie from "@/app/components/aboutMovie/aboutMovie";
import Reviews from "@/app/components/reviews/reviews";
import styles from "./main.module.scss"

export default function Main (){
    return (
        <>
            <BannerForMovie/>
        <main className={styles.main}>
            <PromoBannerForMovie/>
            <SeasonalBlock/>
            <AboutMovie/>
            <Reviews/>
        </main>
        </>
    )
}