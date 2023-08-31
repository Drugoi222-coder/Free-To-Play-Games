import { Space, Button } from "antd";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./GameInfoWrap.module.css";

const GameInfoWrap = ({ children }: PropsWithChildren) => {
    return (
        <Space
            className={styles.wrap}
            direction="vertical"
        >
            <Link to="/">
                <Button type="primary">
                    Назад
                </Button>
            </Link>
            {children}
        </Space>
    );
};

export default GameInfoWrap;
