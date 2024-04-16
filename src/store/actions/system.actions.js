import * as a from "../reducers/system.reducer";


export function setModal(boolean) {
    store.dispatch({ type: a.MODAL_STATUS, boolean })
}
