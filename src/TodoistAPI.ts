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
