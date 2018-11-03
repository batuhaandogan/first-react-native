import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes'

export const AddPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
}

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}