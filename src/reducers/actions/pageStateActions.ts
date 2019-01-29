export class Action extends String {}

export const CHANGE_PAGE: Action = 'CHANGE_PAGE'

export const changePage = (page: string) => ({ type: CHANGE_PAGE, data: page })
