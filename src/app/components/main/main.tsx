import BannerForMovie from "@/app/components/bannerForMovie/bannerForMovie";
import PromoBannerForMovie from "@/app/components/promoBannerForMovie/promoBannerForMovie"
import SeasonBlock from "@/app/components/seasonBlock/seasonBlock";
import AboutMovie from "@/app/components/aboutMovie/aboutMovie";
import Reviews from "@/app/components/reviews/reviews";
import styles from "./main.module.scss"

export default function Main (){
    return (
        <>
            <BannerForMovie/>
        <main className={styles.main}>
            <PromoBannerForMovie/>
            <SeasonBlock/>
            <AboutMovie/>
            <Reviews/>
        </main>
        </>
    )
}