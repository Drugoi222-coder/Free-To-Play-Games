import { Button, Space } from "antd";
import { fetchGameList, setParams } from "../../Redux/gameListSlice";
import { IParams, urlKeyTypes } from "../../Types/types";
import { useAppDispatch, useFilterParams } from "../../hooks/hooks";
import SelectElement from "../SelectElement/SelectElement";
import { platformsElems, sortingCriterias, tags } from "../../utils/constants";
import styles from "./FilterMenu.module.css";

const FilterMenu = () => {
    const dispatch = useAppDispatch();
    const params = useFilterParams();

    const onSubmitParams = (urlKey: urlKeyTypes) => () => {
        const newParams: IParams = { ...params };
        if (typeof newParams.tag === "object") {
            newParams.tag = newParams.tag.join(".").trim();
        }
        const isParamsNotEmpty = Object.values(newParams).some(
            (item) => item ? item.length > 0 : false
        );
        if (!isParamsNotEmpty) {
            dispatch(fetchGameList({ urlKey: "games" }));
        } else {
            const params = Object.values(newParams).filter((item) => item && item.length > 0 ? item : false);
            if (params.length === 1) {
                dispatch(fetchGameList({ ...newParams, urlKey: "games" }));
            } else {
                dispatch(fetchGameList({ ...newParams, urlKey }));
            }
        }
    };

    const onDeselectAll = () => {
        dispatch(
            setParams({
                tag: [],
                platform: undefined,
                "sort-by": undefined,
            })
        );
    };

    return (
        <div className={styles.menu}>
            <SelectElement optionName="tag" options={tags} text="Жанр:" />
            <SelectElement
                optionName="platform"
                options={platformsElems}
                text="Платформа:"
            />
            <SelectElement
                optionName="sort-by"
                options={sortingCriterias}
                text="Сортировать по:"
            />
            <Space className={styles.buttonWrap} wrap>
                <Button
                    className={styles.button}
                    onClick={onSubmitParams("filter")}
                    type="primary"
                >
                    Применить
                </Button>
                <Button
                    className={styles.button}
                    onClick={onDeselectAll}
                    type="default"
                >
                    Сбросить
                </Button>
            </Space>
        </div>
    );
};

export default FilterMenu;
