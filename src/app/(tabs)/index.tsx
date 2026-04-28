import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import GlobalHeader from "@/components/GlobalHeader";
import HorizontalCarousel from "@/components/HorizontalCarousel";

export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Home</Text>
            <Text style={globalStyles.sectionTitle}>Recently Played</Text>
            <HorizontalCarousel />
            <Text style={globalStyles.sectionTitle}>Recently Played</Text>
            <HorizontalCarousel />
            <Text style={globalStyles.sectionTitle}>Recently Played</Text>
            <HorizontalCarousel />
            <Text style={globalStyles.sectionTitle}>Recently Played</Text>
            <HorizontalCarousel />

        </ScrollView>
    );
}