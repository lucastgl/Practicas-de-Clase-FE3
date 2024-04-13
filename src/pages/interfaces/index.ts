export interface Characters {
    amiibo: Characters[];
}

export interface Character {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: string;
    tail: string;
    type: string;
}

export interface Rlease {
    au: Date;
    eu: Date;
    jp: Date;
    na: Date;
}