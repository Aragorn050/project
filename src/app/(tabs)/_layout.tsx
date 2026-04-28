import { colors } from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.surface,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='new'
                options={{
                    title: 'New',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='newspaper' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='radio'
                options={{
                    title: 'Radio',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='radio' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='library'
                options={{
                    title: 'Library',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='library' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='search' size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}
