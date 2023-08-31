import GameList from "../../components/GameList/GameList";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { Space, Row, Col } from "antd";
import styles from "./GameListPage.module.css";

const sizesFirstCol = {
    lg: 16,
    sm: 14,
    xs: 10
};

const sizesSecondCol = {
    lg: 8,
    sm: 10,
    xs: 8,
}

const GameListPage = () => {
    return (
        <>
            <Row justify="space-between">
                <Col {...sizesFirstCol}>
                    <Space className={styles.firstRowSpace} direction="vertical">
                        <GameList />
                    </Space>
                </Col>
                <Col {...sizesSecondCol}>
                    <FilterMenu />
                </Col>
            </Row>
        </>
    );
};

export default GameListPage;
