import { Carousel } from "antd";
import Arrow from "../Arrow/Arrow";
import { useGameInfo } from "../../hooks/hooks";
import "./CarouselScreens.css";
import styles from "./CarouselScreens.module.css";

const CarouselScreens = () => {
    const gameInfo = useGameInfo();

    return (
        <div className={styles.slider}>
            <Carousel
                className={styles.carousel}
                arrows
                autoplay
                nextArrow={<Arrow position="right" />}
                prevArrow={<Arrow position="left" />}
            >
                {gameInfo.screenshots.map((item) => (
                    <div key={item.id}>
                        <img className={styles.img} src={item.image} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselScreens;
