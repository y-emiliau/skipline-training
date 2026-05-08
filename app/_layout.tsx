import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <>
            <StatusBar style="auto" />
            <Tabs>
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
