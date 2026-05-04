import {globalStyles} from '@/styles/global';
import {Text, ScrollView} from 'react-native';
import LibraryList from "../../components/LibraryList";

export default function LibraryScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Library</Text>

            <LibraryList songName={"Name"} amount={10}/>
        </ScrollView>
    );
}