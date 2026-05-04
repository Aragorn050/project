import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import HorizontalCarousel from "@/components/HorizontalCarousel";


export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Home</Text>

            <Text style={globalStyles.sectionTitle}>Recently Played</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5}/>

            <Text style={globalStyles.sectionTitle}>Stations for You</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5}/>

            <Text style={globalStyles.sectionTitle}>New Releases for You</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5}/>


        </ScrollView>
    );
}