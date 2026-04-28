import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import GlobalHeader from '../../components/GlobalHeader';

export default function RadioScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Radio</Text>
            <GlobalHeader />

        </ScrollView>
    );
}