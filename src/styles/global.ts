import { StyleSheet } from 'react-native';

export const colors = {
    background: '#2D241E',
    header: '#852ab3',
    surface: '#4A3B31',
    primary: '#C88A4E',
    text: '#F2EADC',
    textSecondary: '#A68E7A',
    alert: '#ff5252',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.textSecondary,
        marginTop: 20,
        marginBottom: 0,
    },
    empty: {
        color: colors.textSecondary,
        fontSize: 14,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});