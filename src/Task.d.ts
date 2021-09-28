export type Task = {
    assignee?: number,
    assigner?: number,
    comment_count?: number,
    completed?: boolean,
    content?: string,
    description?: string,
    due?: Due,
    id?: number,
    label_ids?: [
        number,
        number,
        number
    ],
    order?: number,
    priority?: number,
    project_id?: number,
    section_id?: number,
    parent_id?: number,
    url?: string
}

type Due = {
    date: string,
    datetime: string,
    recurring: boolean,
    string: string,
    timezone: string
}

