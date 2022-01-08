export default {
    namespaced: true,
    state: {
        regionColors: [
            {
                red: 0,
                green: 0,
                blue: 0
            },
            {
                red: 255,
                green: 0,
                blue: 0
            },
            {
                red: 255,
                green: 255,
                blue: 255
            },
            {
                red: 255,
                green: 255,
                blue: 255
            },
            {
                red: 0,
                green: 0,
                blue: 0
            }
        ]
    },
    mutations: {
        UPDATE_REGION_COLOR(state, payload) {
            const regionIdx = payload.regionIndex - 1;
            state.regionColors[ regionIdx ] = payload.colors;
        }
    }
}