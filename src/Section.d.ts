export type Section = {
    id?: number,
    project_id?: number,
    order?: number,
    name?: string
}

export type Tasks = {
    tasks: Array<Task>
}