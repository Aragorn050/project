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
    amount: number;
    sizeMultiplier?: number;
}

const HorizontalCarousel = ({
                                songName,
                                amount,
                                sizeMultiplier = 0.115
                            }: HorizontalCarouselProps) => {

    const squareSize = SCREEN_WIDTH * sizeMultiplier;


    const data = Array.from({ length: amount }, (_, index) => ({
        id: index.toString(),
    }));

    const renderItem = ({ index }: { index: number }) => (
        <View style={styles.itemWrapper}>
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9}
            >
                <View style={[styles.square, { width: squareSize, height: squareSize }]} />
                <View style={styles.textContainer}>
                    <Text style={styles.songLabel} numberOfLines={1}>
                        {songName}
                    </Text>
                </View>
            </TouchableOpacity>

            {index < data.length - 1 && (
                <View style={[styles.separator, { marginLeft: squareSize + 10 }]} />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                contentContainerStyle={styles.listPadding}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    listPadding: {
        paddingHorizontal: 1,
    },
    itemWrapper: {
        width: '100%',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    square: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
    },
    textContainer: {
        paddingLeft: 10,
    },
    songLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: colors.text || '#000',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.textSecondary,
    },
});

export default HorizontalCarousel;