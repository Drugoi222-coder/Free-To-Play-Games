import { Typography, Select } from "antd";
import { IOption, optionsType } from "../../Types/types";
import { useAppDispatch, useFilterParams } from "../../hooks/hooks";
import { setParams } from "../../Redux/gameListSlice";
import { platformType, sortingType } from "../../Types/types";
import { FC } from "react";
const { Paragraph, Text } = Typography;

interface ISelectElement {
    options: IOption[];
    optionName: optionsType;
    text: string;
}

const SelectElement: FC<ISelectElement> = ({options, optionName, text}) => {
    const params = useFilterParams();
    const dispatch = useAppDispatch();
    const multiple = optionName === "tag" ? "multiple" : undefined;

    const onSelectOption = (option: optionsType) => (e: string) => {
        if (option === "tag") {
            if (
                e !== null &&
                typeof params?.tag === "object" &&
                !params.tag.includes(e)
            ) {
                dispatch(setParams({ tag: [...params.tag, e] }));
            }
        } else if (option === "platform") {
            dispatch(setParams({ platform: e as platformType }));
        } else {
            dispatch(setParams({ "sort-by": e as sortingType }));
        }
    };

    const onDeselectOption = (option: optionsType) => (e: string) => {
        if (option === "tag") {
            const elemIndex = params.tag?.indexOf(e);
            if (
                elemIndex !== undefined &&
                elemIndex !== -1 &&
                typeof params.tag === "object"
            ) {
                const newTag = [...params.tag];
                newTag.splice(elemIndex, 1);
                dispatch(setParams({ tag: newTag }));
            }
        }
    };

    return (
        <Paragraph>
            <Text>{text}</Text>
            <Select
                style={{ width: "100%" }}
                mode={multiple}
                options={options}
                value={params[optionName]}
                onDeselect={onDeselectOption(optionName)}
                onSelect={onSelectOption(optionName)}
            />
        </Paragraph>
    );
};

export default SelectElement;
