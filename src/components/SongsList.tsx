import { colors } from '@/styles/global';
import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HorizontalCarouselProps {
    songName: string;
    bandName: string;
    amount: number;
    sizeMultiplier?: number;
}

const HorizontalCarousel = ({
                                songName,
                                bandName,
                                amount,
                                sizeMultiplier = 0.12
                            }: HorizontalCarouselProps) => {

    const squareSize = SCREEN_WIDTH * sizeMultiplier;
    const spacing = 12;
    const columnWidth = SCREEN_WIDTH * 0.75;

    const rawData = Array.from({ length: amount }, (_, index) => ({
        id: index.toString(),
    }));

    const chunkedData = [];
    for (let i = 0; i < rawData.length; i += 4) {
        chunkedData.push(rawData.slice(i, i + 4));
    }

    const renderColumn = ({ item: columnSongs }: { item: any[] }) => (
        <View style={[styles.column, { width: columnWidth }]}>
            {columnSongs.map((song) => (
                <TouchableOpacity
                    key={song.id}
                    style={styles.card}
                    activeOpacity={0.7}
                >
                    <View style={[styles.square, { width: squareSize, height: squareSize }]} />
                    <View style={styles.textContainer}>
                        <Text style={styles.songLabel} numberOfLines={1}>
                            {songName}
                        </Text>
                        <Text style={styles.bandLabel} numberOfLines={1}>
                            {bandName}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={chunkedData} // Use the chunked groups
                renderItem={renderColumn}
                keyExtractor={(_, index) => `col-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={columnWidth + spacing}
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
    column: {
        marginRight: 8,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: colors.surface,
        borderRadius: 10,
        padding: 5,
    },
    square: {
        backgroundColor: '#E0E0E0',
        borderRadius: 6,
    },
    textContainer: {
        paddingLeft: 12,
        flex: 1,
    },
    songLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.text,
    },
    bandLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.textSecondary,
        marginTop: 2,
    }
});

export default HorizontalCarousel;