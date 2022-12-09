
export interface Page {
    title: string;
    content: string;
}

export interface ApiPagesList{
    [id: string]: Page;
}
