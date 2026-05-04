import {colors} from '@/styles/global';
import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

interface HorizontalCarouselProps {
    albumName: string;
    bandName: string;
    amount: number;
    sizeMultiplier?: number;
}

const HorizontalCarousel = ({
                                albumName,
                                bandName,
                                amount,
                                sizeMultiplier = 0.4
                            }: HorizontalCarouselProps) => {

    const cardSize = screenWidth * sizeMultiplier;
    const spacing = 12;

    const data = Array.from({length: amount}, (_, index) => ({
        id: index.toString(),
    }));

    const renderItem = () => (
        <TouchableOpacity
            style={[styles.card, {width: cardSize}]}
            activeOpacity={0.7}
        >
            <View style={[styles.square, {width: cardSize, height: cardSize}]}/>
            <View style={styles.textContainer}>
                <Text style={styles.bandLabel}>
                    {albumName}
                </Text>
                <Text style={styles.artistLabel}>
                    {bandName}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                // Snap interval must update based on the dynamic size
                snapToInterval={cardSize + spacing}
                decelerationRate="fast"
                snapToAlignment="start"
                contentContainerStyle={styles.listPadding}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    listPadding: {
        paddingHorizontal: 1,
    },
    card: {
        marginRight: 12,
    },
    square: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        marginBottom: 8,
    },
    textContainer: {
        paddingLeft: 2,
    },
    bandLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.text,
    },
    artistLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.textSecondary,
        marginTop: 2,
    }
});

export default HorizontalCarousel;