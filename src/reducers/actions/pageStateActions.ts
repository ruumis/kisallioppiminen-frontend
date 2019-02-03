export class Action extends String {}

export const CHANGE_PAGE: Action = 'CHANGE_PAGE'
export const TOGGLE_CONTENT_BOX: Action = 'TOGGLE_CONTENT_BOX'

export const changePage = (page: string) => ({ type: CHANGE_PAGE, data: page })
export const toggleContentBox = (boxId: string) => ({type: TOGGLE_CONTENT_BOX, data: boxId})
