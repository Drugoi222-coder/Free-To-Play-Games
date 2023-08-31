export const tags = `mmorpg, shooter, strategy, moba
    , racing, sports, social, sandbox
    , open-world, survival, pvp, pve
    , pixel, voxel, zombie, turn-based
    , first-person, third-Person, top-down
    , tank, space, sailing, side-scroller
    , superhero, permadeath, card, battle-royale
    , mmo, mmofps, mmotps, 3d, 2d, anime
    , fantasy, sci-fi, fighting, action-rpg
    , action, military, martial-arts
    , flight, low-spec, tower-defense, horror
    , mmorts`
    .split(", ")
    .map((item) => ({
        value: item,
        label: item[0].toUpperCase() + item.slice(1, item.length),
    }));

export const sortingCriterias = [
    { value: "release-date", label: "Дате релиза" },
    { value: "popularity", label: "Популярности" },
    { value: "alphabetical", label: "Алфавиту" },
    { value: "relevance", label: "Релевантности" },
];

export const platformsElems = [
    { value: "pc", label: "PC (Windows)" },
    { value: "browser", label: "Web Browser" },
    { value: "all", label: "PC (Windows), Web Browser" },
];

export const ERROR_FILTER_MSG = "Попробуйте другие параметры";
export const TIMER_MINUTES = 5;