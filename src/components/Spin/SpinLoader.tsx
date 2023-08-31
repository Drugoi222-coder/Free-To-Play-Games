import { Spin } from "antd";
import styles from "./SpinLoader.module.css";

const SpinLoader = ({ className }: { className?: string }) => {
    return <Spin className={className ?? styles.spin} size="large" />;
};

export default SpinLoader;
