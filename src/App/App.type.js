//@flow

export type Action = {
    +type:string,
    +payload:any
}

export type ReducerState = {|
    +fetching:boolean,
    +fetched:boolean,
    +error:Object,
    +podcasts:any
|}
