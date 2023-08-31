import { Card } from "antd";
import { GameInfo } from "../../Types/types";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { localeDate } from "../../utils/functions";
import styles from "./CardGame.module.css";

const { Text } = Typography;

const CardGame = (data: GameInfo) => {
    const { id, thumbnail, title, release_date, publisher, genre } = data;

    return (
        <Link to={`/game/id/${id}`}>
            <Card
                className={styles.cardGame}
                hoverable
                bordered
                cover={<img src={thumbnail} alt="" />}
            >
                <Card.Meta title={title} />
                <Space style={{ marginTop: "10px" }} direction="vertical">
                    <Text>Дата выхода: {localeDate(release_date)}</Text>
                    <Text>Издатель: {publisher}</Text>
                    <Text>Жанр: {genre}</Text>
                </Space>
            </Card>
        </Link>
    );
};

export default CardGame;
