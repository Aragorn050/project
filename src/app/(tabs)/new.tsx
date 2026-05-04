import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import SongsList from '@/components/SongsList';
import HorizontalCarousel from "@/components/HorizontalCarousel";

export default function NewScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>New</Text>

            <Text style={globalStyles.sectionTitle}>New Realises</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5} sizeMultiplier={0.5}/>

            <Text style={globalStyles.sectionTitle}>Latest Songs</Text>
            <SongsList songName={"Name"} bandName={"Band"} amount={12}/>

            <Text style={globalStyles.sectionTitle}>Updated Playlists</Text>
            <HorizontalCarousel albumName={"Album Name"} bandName={"Band Name"} amount={5}/>


        </ScrollView>
    );
}