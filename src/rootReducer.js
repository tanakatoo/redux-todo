const INITIAL_STATE = { items: [] }

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('addItem'):
            return { ...state, items: [...state.items, action.item] }
        case ('removeItem'):
            const idx = state.items.findIndex(d => d.id === action.itemid)
            const newArr = state.items.filter((d, i) => d.i !== idx)
            return { ...state, items: newArr }
        case "done":
            const newArr2 = state.items.map(i => {
                if (i.id === action.id) {
                    return { ...i, done: action.done }
                }
                return i
            })

            return { ...state, items: newArr2 }
        default:
            return state
    }

}

export default rootReducer