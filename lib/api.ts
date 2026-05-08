import { API_BASE_URL } from './config';
import { LoginResponse } from './api-types';

type ApiOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: unknown;
};

function getErrorMessage(data: unknown, fallback: string) {
    if (data && typeof data === 'object' && 'message' in data) {
        const message = data.message;

        if (typeof message === 'string') {
            return message;
        }
    }

    return fallback;
}

async function parseJsonSafe(response: Response) {
    const text = await response.text();

    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

export async function apiRequest<T>(
    path: string,
    options: ApiOptions = {},
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: options.method ?? 'GET',
        headers: {
            Accept: 'application/json',
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await parseJsonSafe(response);

    if (!response.ok) {
        throw new Error(
            getErrorMessage(data, `API request failed with status ${response.status}`),
        );
    }

    return data as T;
}

export function login(payload: { username: string; password: string }) {
    return apiRequest<LoginResponse>('/auth/login', {
        method: 'POST',
        body: payload,
    });
}
