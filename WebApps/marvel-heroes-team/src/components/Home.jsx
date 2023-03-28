import { Header } from "./Header"
import { MainPage } from "./MainPage"
import { Footer } from "./Footer"


export const Home = () => {

    return (
        <div>
            <Header />
            <MainPage />
            <Footer text={"Data provided by Marvel. © 2023 MARVEL"} />
        </div>
    )
}