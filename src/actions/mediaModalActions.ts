import { MEDIA_MODAL_OPEN, MEDIA_MODAL_CLOSED } from "../constants/mediaModalConstants";

export const setMediaModalOpenAction = (data: any) => {
    return {
        type: MEDIA_MODAL_OPEN,
        mediaModalObject: { isModalOpen: true, data: data }
    };
}

export const setMediaModalClosedAction = () => {
    return {
        type: MEDIA_MODAL_CLOSED,
        mediaModalObject: { isModalOpen: false }
    };
}
