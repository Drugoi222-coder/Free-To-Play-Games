import { Space, Typography } from "antd";
import { useGameInfo } from "../../hooks/hooks";
import { localeDate } from "../../utils/functions";
import styles from "./ShortCard.module.css";

const { Text } = Typography;

const ShortCard = () => {
    const gameInfo = useGameInfo();

    if (gameInfo) {
        const { thumbnail, publisher, developer, genre, release_date } =
            gameInfo;

        return (
            <Space size={0} className={styles.wrap} direction="vertical">
                <div className={styles.fullSize}>
                    <img className={styles.fullSize} src={thumbnail} />
                </div>
                <Space
                    size={12}
                    direction="vertical"
                    className={styles.textWrap}
                >
                    <Text className={styles.text}>Издатель: {publisher}</Text>
                    <Text className={styles.text}>
                        Разработчик: {developer}
                    </Text>
                    <Text className={styles.text}>Жанр: {genre}</Text>
                    <Text className={styles.text}>
                        Дата выхода: {localeDate(release_date)}
                    </Text>
                </Space>
            </Space>
        );
    }

    return <Text className={styles.text}>Нет данных</Text>;
};

export default ShortCard;
