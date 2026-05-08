import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../constants/theme';

export default function RootLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Tabs
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                    headerShadowVisible: false,
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.muted,
                }}
            >
                <Tabs.Screen name="index" options={{
                    title: 'SkipLine', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }} />
                <Tabs.Screen name="details" options={{
                    title: 'Details', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information-circle-outline" size={size} color={color} />
                    ),
                }} />
            </Tabs>
        </>
    );
}
