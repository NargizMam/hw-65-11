
export interface Page {
    title: string;
    content: string;
}

export interface ApiPagesList{
    [od: string]: Page;
}
