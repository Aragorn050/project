import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import HorizontalCarousel from "@/components/HorizontalCarousel";
import RadioList from "@/components/RadioList";

export default function RadioScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Radio</Text>

            <RadioList  amount={6}/>

            <Text style={globalStyles.sectionTitle}>On Air</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5} sizeMultiplier={0.5}/>

            <Text style={globalStyles.sectionTitle}>Podcasts</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5}/>
        </ScrollView>
    );
}