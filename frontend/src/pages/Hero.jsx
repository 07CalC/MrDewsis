import { AboutUs } from "../components/AboutUs"
import { MainBanner } from "../components/MainBanner"
import { Subscription } from "../components/Subscription"
import { TodaysSpecial } from "../components/TodaysSpecial"

export const HeroPage = () => {

    return (
        <div className="w-full md:mt-0 md:p-10 py-10 flex flex-col items-center justify-center">
            <MainBanner />
            <div className="mt-12">
            <TodaysSpecial />
            </div>
            <div className="mt-12">
            <Subscription />
            </div>
            <div className="mt-12">
            <AboutUs />
            </div>
        </div>
    )
}