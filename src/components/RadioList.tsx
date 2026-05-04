import { colors } from '@/styles/global';
import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HorizontalCarouselProps {

    amount: number;
    sizeMultiplier?: number;
}

const HorizontalCarousel = ({
                                amount,
                                sizeMultiplier = 0.27
                            }: HorizontalCarouselProps) => {

    const squareSize = SCREEN_WIDTH * sizeMultiplier;
    const spacing = 12;
    const columnWidth = SCREEN_WIDTH * 0.27;

    const rawData = Array.from({ length: amount }, (_, index) => ({
        id: index.toString(),
    }));

    const chunkedData = [];
    for (let i = 0; i < rawData.length; i += 2) {
        chunkedData.push(rawData.slice(i, i + 2));
    }

    const renderColumn = ({ item: columnSongs }: { item: any[] }) => (
        <View style={[styles.column, { width: columnWidth }]}>
            {columnSongs.map((song) => (
                <TouchableOpacity
                    key={song.id}
                    style={styles.card}
                    activeOpacity={0.9}
                >
                    <View style={[styles.square, { width: squareSize, height: squareSize }]} />
                    <View style={styles.textContainer}>

                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={chunkedData}
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
        marginVertical: 20,
    },
    listPadding: {
        paddingHorizontal: 1,
    },
    column: {
        marginRight: 15,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    square: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
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