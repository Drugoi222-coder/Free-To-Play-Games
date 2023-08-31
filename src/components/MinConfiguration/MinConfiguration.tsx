import { Space, Typography } from "antd";
import { useGameInfo } from "../../hooks/hooks";
import styles from "./MinConfiguration.module.css";

const { Title, Text } = Typography;

const MinConfiguration = () => {
    const gameInfo = useGameInfo();
    const { minimum_system_requirements } = gameInfo;

    if (minimum_system_requirements) {
        const { os, processor, storage, memory, graphics } =
            minimum_system_requirements;

        return (
            <>
                <Title className={styles.title} level={2}>
                    Cистемные требования
                </Title>
                <Space direction="vertical">
                    <Text className={styles.text}>
                        Операционная система: {os ? os : "Нет данных"}
                    </Text>
                    <Text className={styles.text}>
                        Процессор: {processor ? processor : "Нет данных"}
                    </Text>
                    <Text className={styles.text}>
                        Место на диске: {storage ? storage : "Нет данных"}
                    </Text>
                    <Text className={styles.text}>
                        Оперативная память: {memory ? memory : "Нет данных"}
                    </Text>
                    <Text className={styles.text}>
                        Видеокарта: {graphics ? graphics : "Нет данных"}
                    </Text>
                </Space>
            </>
        );
    } else {
        return (
            <>
                <Title className={styles.title} level={2}>
                    Cистемные требования
                </Title>
                <Text className={styles.text}>
                    Нет данных о минимальных системных требованиях
                </Text>
            </>
        );
    }
};

export default MinConfiguration;
