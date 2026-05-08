export type HealthResponse = {
    status: string;
};

export type UserConfigResponse = {
    language: string;
    theme: string;
};

export type UserResponse = {
    id: number;
    email: string;
    username: string;
    roles: string[];
    firstName: string;
    lastName: string;
    phoneNumber: string;
    verified: boolean;
    isVerified: boolean;
    config: UserConfigResponse;
};

export type LoginResponse = {
    access_token: string;
    token_type: 'Bearer';
    expires_in: number;
    expires_at: string;
    refresh_token: string;
    refresh_expires_at: string;
    user: UserResponse;
};
