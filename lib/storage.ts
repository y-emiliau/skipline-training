import * as SecureStore from 'expo-secure-store';

const ACCESS_TOKEN_KEY = 'skipline_access_token';
const REFRESH_TOKEN_KEY = 'skipline_refresh_token';
const ACCESS_EXPIRES_AT_KEY = 'skipline_access_expires_at';
const REFRESH_EXPIRES_AT_KEY = 'skipline_refresh_expires_at';

export type StoredTokens = {
    accessToken: string;
    refreshToken: string;
    accessExpiresAt: string;
    refreshExpiresAt: string;
};

export async function getStoredTokens(): Promise<StoredTokens | null> {
    const [accessToken, refreshToken, accessExpiresAt, refreshExpiresAt] =
        await Promise.all([
            SecureStore.getItemAsync(ACCESS_TOKEN_KEY),
            SecureStore.getItemAsync(REFRESH_TOKEN_KEY),
            SecureStore.getItemAsync(ACCESS_EXPIRES_AT_KEY),
            SecureStore.getItemAsync(REFRESH_EXPIRES_AT_KEY),
        ]);

    if (!accessToken || !refreshToken || !accessExpiresAt || !refreshExpiresAt) {
        return null;
    }

    return {
        accessToken,
        refreshToken,
        accessExpiresAt,
        refreshExpiresAt,
    };
}

export async function setStoredTokens(tokens: StoredTokens): Promise<void> {
    await Promise.all([
        SecureStore.setItemAsync(ACCESS_TOKEN_KEY, tokens.accessToken),
        SecureStore.setItemAsync(REFRESH_TOKEN_KEY, tokens.refreshToken),
        SecureStore.setItemAsync(ACCESS_EXPIRES_AT_KEY, tokens.accessExpiresAt),
        SecureStore.setItemAsync(REFRESH_EXPIRES_AT_KEY, tokens.refreshExpiresAt),
    ]);
}

export async function clearStoredTokens(): Promise<void> {
    await Promise.all([
        SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY),
        SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY),
        SecureStore.deleteItemAsync(ACCESS_EXPIRES_AT_KEY),
        SecureStore.deleteItemAsync(REFRESH_EXPIRES_AT_KEY),
    ]);
}
