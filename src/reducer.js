export default function reducer(state = {}, action) {
    if (action.type == "GET_CODE") {
        console.log("action in get code reducer", action);

        return { ...state, code: action.code };
    }
    console.log("redux state:", state);

    return state;
}
