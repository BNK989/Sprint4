

export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'

const initialState = {
    orders: [],
}

export function orderReducer(state = initialState, action) {
    switch (action.type) {

        case SET_ORDERS:
            return { ...state, orders: action.orders }

        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.savedOrder]
            }

        case UPDATE_ORDER:
            return {
                ...state,
                orders: state.orders.map(order => order._id === action.editOrder._id ? action.editOrder : order)
            }

        case REMOVE_ORDER:
            const lastOrders = [...state.orders]
            return {
                ...state,
                orders: state.orders.filter(order => order._id !== action.orderId),
                lastOrders
            }


        default:
            return state
    }
}