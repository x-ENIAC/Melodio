import { User } from "../App";

let testUsers : User[] = [
    {
        user_id: 0,
        login: "not_authorized",
        password: "not_authorized",
        email: "not_authorized"
    },
    {
        user_id: 1,
        login: "admin",
        password: "admin",
        email: "admin@admin.com"
    },
    {
        user_id: 2,
        login: "pinkotter",
        password: "help",
        email: "maroonotter@gmail.com"
    }
];

export default function getTestUsers() {
    return testUsers;
}

export function getDefaultTestUsers() {
    return testUsers[0];
}