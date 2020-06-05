import { MEDIA_MODAL_OPEN, MEDIA_MODAL_CLOSED } from "../constants/mediaModalConstants";

const mediaModalReducer = (state = {}, action: any) => {
    switch(action.type) {
        case MEDIA_MODAL_OPEN:
            return {
                ...state,
                mediaModalObject: action.mediaModalObject
            };
        case MEDIA_MODAL_CLOSED:
            return {
                ...state,
                mediaModalObject: action.mediaModalObject
            };
        default:
            return {...state};
    }
}

export default mediaModalReducer;
