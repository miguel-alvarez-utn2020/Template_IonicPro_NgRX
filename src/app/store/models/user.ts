import { User } from "src/app/domain/models/user";

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}