import {
    createContext,
    PropsWithChildren,
    useContext,
    useMemo,
    useState,
} from 'react';

import { LoginResponse, UserResponse } from '../lib/api-types';
import {
    clearStoredTokens,
    setStoredTokens,
    StoredTokens,
} from '../lib/storage';

type AuthContextValue = {
    user: UserResponse | null;
    tokens: StoredTokens | null;
    isAuthenticated: boolean;
    signIn: (response: LoginResponse) => Promise<void>;
    signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<UserResponse | null>(null);
    const [tokens, setTokens] = useState<StoredTokens | null>(null);

    const signIn = async (response: LoginResponse) => {
        const nextTokens: StoredTokens = {
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            accessExpiresAt: response.expires_at,
            refreshExpiresAt: response.refresh_expires_at,
        };

        await setStoredTokens(nextTokens);

        setTokens(nextTokens);
        setUser(response.user);
    };

    const signOut = async () => {
        await clearStoredTokens();

        setTokens(null);
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            tokens,
            isAuthenticated: user !== null && tokens !== null,
            signIn,
            signOut,
        }),
        [user, tokens],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be used inside AuthProvider');
    }

    return value;
}
