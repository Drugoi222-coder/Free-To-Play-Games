export type loadingType = "loading" | "loaded" | "error";
export type sortingType =
    | null
    | "release-date"
    | "popularity"
    | "alphabetical"
    | "relevance";
export type optionsType = "tag" | "platform" | "sort-by";
export type platformType = "pc" | "browser" | "all";
export type tagsType =
    | "mmorpg"
    | "shooter"
    | "strategy"
    | "moba"
    | "racing"
    | "sports"
    | "social"
    | "sandbox"
    | "open-world"
    | "survival"
    | "pvp"
    | "pve"
    | "pixel"
    | "voxel"
    | "zombie"
    | "turn-based"
    | "first-person"
    | "third-Person"
    | "top-down"
    | "tank"
    | "space"
    | "sailing"
    | "side-scroller"
    | "superhero"
    | "permadeath"
    | "card"
    | "battle-royale"
    | "mmo"
    | "mmofps"
    | "mmotps"
    | "3d"
    | "2d"
    | "anime"
    | "fantasy"
    | "sci-fi"
    | "fighting"
    | "action-rpg"
    | "action"
    | "military"
    | "martial-arts"
    | "flight"
    | "low-spec"
    | "tower-defense"
    | "horror"
    | "mmorts";

export type urlKeyTypes = "filter" | "games" | "game";

export type positionType = "right" | "left";

export interface IOption {
    value: string,
    label: string,
};

export interface IParams {
    "sort-by"?: sortingType;
    platform?: platformType;
    tag?: string | string[];
    id?: string;
    urlKey?: urlKeyTypes;
}

export interface IGameList {
    isLoaded: loadingType;
    params: IParams;
}

export interface GameInfo {
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    title: string;
}

export interface GameMoreInfo {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    };
    screenshots: {
        id: number;
        image: string;
    }[];
}
