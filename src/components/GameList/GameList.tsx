import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { fetchGameList } from "../../Redux/gameListSlice";
import { GameInfo, loadingType } from "../../Types/types";
import { Space } from "antd";
import { gameListSelectors } from "../../Redux/gameListSlice";
import CardGame from "../CardGame/CardGame";
import { useAppDispatch } from "../../hooks/hooks";
import Error from "../Error/Error";
import { ERROR_FILTER_MSG } from "../../utils/constants";
import styles from "./GameList.module.css";
import SpinLoader from "../Spin/SpinLoader";

const GameList = () => {
    const dispatch = useAppDispatch();
    const gameList = useSelector<RootState, GameInfo[]>(
        gameListSelectors.selectAll
    );
    const isLoaded = useSelector<RootState, loadingType>(
        (state) => state.gameListSlice.isLoaded
    );

    useEffect(() => {
        if (gameList.length === 0) {
            dispatch(fetchGameList({ urlKey: "games" }));
        }
    }, []);

    return isLoaded === "error" ? (
        <Error subTitle={ERROR_FILTER_MSG} />
    ) : isLoaded === "loading" ? (
        <SpinLoader className={styles.spin} />
    ) : (
        <Space
            className={styles.gameList}
            size="middle"
            direction="horizontal"
            wrap
        >
            {gameList.map((item) => (
                <CardGame key={item.id} {...item} />
            ))}
        </Space>
    );
};

export default GameList;
