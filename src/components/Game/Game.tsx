import { Row } from "antd";
import GameName from "../GameName/GameName";
import CarouselScreens from "../CarouselScreens/CarouselScreens";
import ShortCard from "../ShortCard/ShortCard";
import Description from "../Description/Description";
import MinConfiguration from "../MinConfiguration/MinConfiguration";

const Game = () => {
    return (
        <>
            <GameName />
            <Row justify="space-between">
                <CarouselScreens />
                <ShortCard />
            </Row>
            <Description />
            <MinConfiguration />
        </>
    );
};

export default Game;
