import { colors, globalStyles } from '@/styles/global';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

// size of the squares
const cardSize = width * 0.4;
const spacing = 12;

const defaultList = [
    { id: '1', name: 'Album One',artist: 'Artist' },
    { id: '2', name: 'Album Two',artist: 'Artist' },
    { id: '3', name: 'Album Three',artist: 'Artist' },
    { id: '4', name: 'Album Four',artist: 'Artist' },
    { id: '5', name: 'Album Five',artist: 'Artist' },
];

const HorizontalCarousel = () => {
    const renderItem = ({ item }: { item: typeof defaultList[0] }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.label} numberOfLines={2}>

            </Text>
            <View style={styles.square} />
            <Text style={styles.label} numberOfLines={2}>
                {item.name}{'\n'}
                {item.artist}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={defaultList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                contentContainerStyle={styles.listPadding}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 0,
    },
    listPadding: {
        paddingHorizontal: 5,
    },
    card: {
        width: cardSize,
        marginRight: spacing,
    },
    square: {
        width: cardSize,
        height: cardSize,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textSecondary,
        textAlign: 'left',
    },
    band: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textSecondary,
        textAlign: 'left',
    }
});

export default HorizontalCarousel;