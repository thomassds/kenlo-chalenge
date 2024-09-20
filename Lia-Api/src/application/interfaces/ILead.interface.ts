export interface ILead {
    _id: string;
    name: string;
    email: string;
    phone: string;
    interactions?: {
        message: string;
        response: string;
        timestamp: Date;
    }[];
}
