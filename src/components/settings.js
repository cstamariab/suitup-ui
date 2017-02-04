const defaultSettings = {
    Image: {
        aspectRatios: {
            square: {
                width: 600,
                height: 600    
            },
            mediumv: {
                width: 600,
                height: 800
            },
            mediumh: {
                width: 800,
                height: 600
            },
            poster: {
                width: 600,
                height: 900
            },
            backdrop: {
                width: 1600,
                height: 900
            },
            banner: {
                width: 2000,
                height: 400
            }
        }
    },
    /*If you don't pass gutter or columns props, Box will use this defaults*/
    Box: {
        gutter: "1rem",
        columns: 12
    }
}

let settings = {};


class S {

    setSettings(userSettings) {
        settings = {...defaultSettings, ...settings};
    }

    getSettings() {
        return settings;
    }

    getDefaultSettings() {
        return defaultSettings;
    }

    resetToDefault() {
        settings = defaultSettings;
    }

}

const s = new S();
export default s;