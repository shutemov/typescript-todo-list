import {apiConfig} from "./apiconfig"
import {Section} from "./Section";
import {Task} from "./Task";

const {access_key} = apiConfig

const setAuthorizationBearerHeader = (): HeadersInit => {
    const header: HeadersInit = new Headers();
    header.set('Authorization', `Bearer ${apiConfig.access_key}`);
    return header
}

type Project = {
    id: number,
    name: string,
    comment_count: number,
    order: number,
    color: number,
    shared: boolean,
    sync_id: number,
    favorite: boolean,
    parent_id?: number,
    team_inbox: boolean,
    inbox_project: boolean,
    url: string
}

export namespace TodoistApi {
    export const getProjects = async () => {
        const url: string = `https://api.todoist.com/rest/v1/projects`
        const headers: HeadersInit = setAuthorizationBearerHeader()

        const response = await fetch(url, {headers})
        const data: Array<Project> = await response.json()
        return data
    }

    export const getSections = async (projectId: number) => {
        const url: string = `  https://api.todoist.com/rest/v1/sections?project_id=${projectId}`
        const headers: HeadersInit = setAuthorizationBearerHeader()

        const response = await fetch(url, {headers})
        const data: Array<Section> = await response.json()
        return data
    }

    export const getActiveTasks = async () => {
        const url: string = `https://api.todoist.com/rest/v1/tasks`
        const headers: HeadersInit = setAuthorizationBearerHeader()

        const response = await fetch(url, {headers})
        const data: Array<Task> = await response.json()
        return data
    }
}
