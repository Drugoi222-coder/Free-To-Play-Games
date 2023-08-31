import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { MouseEventHandler } from "react";
import { positionType } from "../../Types/types";

const Arrow = ({
    position,
    ...args
}: {
    position: positionType;
    className?: string;
    onClick?: MouseEventHandler;
}) => {
    const { className, onClick } = args;

    return position === "right" ? (
        <RightOutlined className={className} onClick={onClick} />
    ) : (
        <LeftOutlined className={className} onClick={onClick} />
    );
};

export default Arrow;
