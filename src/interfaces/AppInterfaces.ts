export interface Sub {
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
}

export interface AppState {
    subs: Array<Sub>;
    newSubsNumber: number;
}

export interface Props {
    subs: Array<Sub>;
}