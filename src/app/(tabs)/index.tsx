import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

export default function HomeScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Home</Text>

        </ScrollView>
    );
}