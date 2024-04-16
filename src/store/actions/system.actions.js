import * as a from "../reducers/system.reducer";
import { store } from '../store'

export function setModal(boolean) {
    store.dispatch({ type: a.MODAL_STATUS, boolean })
}
