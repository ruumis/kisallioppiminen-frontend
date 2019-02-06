export const SELECT_COURSE_VERSION = 'SELECT_COURSE_VERSION'
export const TOGGLE_CONTENT_BOX = 'TOGGLE_CONTENT_BOX'

export const selectCourseVersion = (version: string) => ({type: SELECT_COURSE_VERSION, data: version})
export const toggleContentBox = (boxId: string) => ({type: TOGGLE_CONTENT_BOX, data: boxId})
