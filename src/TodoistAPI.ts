import {apiConfig} from "./apiconfig"

const {access_key} = apiConfig

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


export const getProjects = async () => {
    const url: string = `https://api.todoist.com/rest/v1/projects`
    const headers: HeadersInit = new Headers();
    headers.set('Authorization', `Bearer ${apiConfig.access_key}`);

    const response = await fetch(url, {headers})
    const data: Array<Project> = await response.json()
    return data
}
