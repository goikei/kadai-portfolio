const TagInfoMap: Record<string, { icon: string }> = {
    "制作中": {
        icon: "material-symbols:construction",
    },
    "公開中": {
        icon: "material-symbols:public",
    },
    "サ終": {
        icon: "material-symbols:mood-bad",
    },
    "ゲーム": {
        icon: "material-symbols:videogame-asset",
    },
    "ミュージック": {
        icon: "material-symbols:music-note",
    },
    "ムービー": {
        icon: "material-symbols:movie",
    },

};


const CategoryInfoMap: Record<string, { icon: string, tags: string[] }> = {
    "状態": {
        icon: "material-symbols:browse-activity",
        tags: ["制作中", "公開中", "サ終"]
    },
    "カテゴリ": {
        icon: "material-symbols:category-search",
        tags: ["ゲーム", "ミュージック", "ムービー"]
    }
}

export {
    TagInfoMap, CategoryInfoMap
}