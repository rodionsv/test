export interface FetchImage {
    data: Record<string, unknown>;
    meta: {
        msg: string;
        response_id: string;
        status: number;
    };
}
