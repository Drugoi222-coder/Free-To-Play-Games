import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import {
    calcDiffDate,
    fetchExactGame,
    setItemStorage,
} from "../../utils/functions";
import GameInfoWrap from "../../components/GameInfoWrap/GameInfoWrap";
import Game from "../../components/Game/Game";
import SpinLoader from "../../components/Spin/SpinLoader";
import Error from "../../components/Error/Error";
import { GameMoreInfo, IParams } from "../../Types/types";
import { TIMER_MINUTES } from "../../utils/constants";

const GameInfoPage = () => {
    const { gameInfo } = useLoaderData() as { gameInfo: GameMoreInfo };

    return (
        <GameInfoWrap>
            <Suspense fallback={<SpinLoader />}>
                <Await errorElement={<Error />} resolve={gameInfo}>
                    <Game />
                </Await>
            </Suspense>
        </GameInfoWrap>
    );
};

const getGameInfo = async (params: IParams) => {
    const { id } = params;

    if (id && sessionStorage.getItem(id)) {
        const item = sessionStorage.getItem(id);
        const data: GameMoreInfo & { createTime: number } = JSON.parse(
            item as string
        );

        if (calcDiffDate(data.createTime) > TIMER_MINUTES) {
            sessionStorage.removeItem(id);
            const newData = await fetchExactGame(id);
            setItemStorage(newData);
            return newData;
        }

        return data;
    } else {
        const data = await fetchExactGame(id as string);
        setItemStorage(data);

        return data;
    }
};

export const gameInfoLoader = ({ params }: { params: IParams }) =>
    defer({
        gameInfo: getGameInfo(params),
    });

export default GameInfoPage;
