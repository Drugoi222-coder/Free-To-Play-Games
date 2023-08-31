import { Space, Typography } from "antd";
import { localeDate } from "../../utils/functions";
import { useGameInfo } from "../../hooks/hooks";
import styles from "./GameName.module.css";

const { Title, Text } = Typography;

const GameName = () => {
    const gameInfo = useGameInfo();

    return (
        <Space size={10} align="baseline" direction="horizontal">
            <Title className={styles.title}>{gameInfo.title}</Title>
            <Text className={styles.text}>
                {localeDate(gameInfo.release_date)}
            </Text>
        </Space>
    );
};

export default GameName;
