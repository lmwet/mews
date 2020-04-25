export default function reducer(state = {}, action) {
    if (action.type == "GET_IMAGES") {
        console.log("action in get images reducer", action.images);

        return { ...state, images: action.images };
    }
    console.log("redux state:", state);

    return state;
}
