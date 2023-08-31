import { Result, Button } from "antd";
import { onReloadPage } from "../../utils/functions";
import style from "./Error.module.css";

const Error = ({ subTitle, className }: { subTitle?: string, className?: string }) => {
    return (
        <Result
            status="error"
            title="Что-то пошло не так"
            subTitle={subTitle}
            className={className ?? style.error}
            extra={[
                <Button onClick={onReloadPage} type="primary" key="console">
                    Перезагрузить страницу
                </Button>,
            ]}
        ></Result>
    );
};

export default Error;
