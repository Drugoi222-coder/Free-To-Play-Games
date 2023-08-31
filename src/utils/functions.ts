import { GameMoreInfo, IParams } from "../Types/types";
import axios from "axios";

export const getRequestOptions = (params: IParams) => ({
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/${params.urlKey}`,
    params: {
        platform: params.platform,
        tag: params.tag,
        "sort-by": params["sort-by"],
        id: params.id,
    },
    headers: {
        "X-RapidAPI-Key": "f39f7848b6msh11371fb1602021fp1fb361jsn576073994924",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
});

export const calcDiffDate = (date: number) => {
    const diff = new Date().getTime() - date;
    return Number((diff / 1000 / 60).toFixed());
};

export const localeDate = (date: string) =>
    new Date(date).toLocaleDateString("ru-RU");

export const onReloadPage = () => location.reload();

export const setItemStorage = (data: GameMoreInfo) => {
    const storageItem = {
        ...data,
        createTime: new Date().getTime(),
    };

    sessionStorage.setItem(String(data.id), JSON.stringify(storageItem));
}

export const fetchExactGame = async (id: string) => {
    const options = getRequestOptions({
        urlKey: "game",
        id,
    });
    const res = await axios.request<GameMoreInfo>(options);
    
    return res.data;
}