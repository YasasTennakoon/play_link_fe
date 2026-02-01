import api from "./axios";

export const loginApi = async (userName: string, password: string) => {
    const res = await api.post("/auth/login", { userName, password });
    return res.data; // { accessToken, user }
};

export const logoutApi = async () => {
    await api.post("/auth/logout");
};
