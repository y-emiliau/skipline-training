import { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { login } from '../../lib/api';
import { colors, radius, spacing } from '../../constants/theme';
import { useAuth } from '../../providers/auth-provider';

export default function LoginScreen() {
    const { signIn } = useAuth();

    const [username, setUsername] = useState('y.emiliau@gmail.com');
    const [password, setPassword] = useState('123456');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);

            const response = await login({ username, password });

            await signIn(response);

            Alert.alert('Logged in', `Welcome ${response.user.firstName}`);
        } catch {
            Alert.alert('Login failed', 'Please check your credentials.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
                style={styles.input}
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Password"
                style={styles.input}
            />

            <Pressable
                style={styles.button}
                onPress={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <ActivityIndicator color={colors.background} />
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        padding: spacing.lg,
    },
    title: {
        color: colors.text,
        fontSize: 32,
        fontWeight: '800',
        marginBottom: spacing.lg,
    },
    input: {
        borderColor: colors.border,
        borderRadius: radius.md,
        borderWidth: 1,
        fontSize: 16,
        marginBottom: spacing.md,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.text,
        borderRadius: radius.md,
        padding: spacing.md,
    },
    buttonText: {
        color: colors.background,
        fontWeight: '700',
    },
});
