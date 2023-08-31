import { Typography } from "antd";
import { useGameInfo } from "../../hooks/hooks";
import styles from "./Description.module.css";

const { Title, Text, Paragraph } = Typography;

const Description = () => {
    const gameInfo = useGameInfo();

    return (
        <Paragraph className={styles.paragraph}>
            <Title className={styles.title} level={2}>
                Описание
            </Title>
            <Text className={styles.text}>{gameInfo.description}</Text>
        </Paragraph>
    );
};

export default Description;
