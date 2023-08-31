import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import * as utils from '@utils/index';
import { t } from 'i18next';
import globalStyle from '@styles/globalStyle';

// Define types for screen options
type Props = {
    titleKey: string;
    renderHeaderRight?: React.ReactNode; // Allow passing custom content to headerRight
};
// Custom header component
const CustomHeader: React.FC<{ title: string }> = ({ title }) => (
    <Text style={globalStyle.fontMediumDark15Style}>{title}</Text>
);

// Function to create customized screen options
export const HeaderOption = (props: Props) => ({
    headerShown: true,
    headerTitle: () => <CustomHeader title={t(props.titleKey)} />,
    headerBackground: () => <View style={styles.backgroundHeader} />,
    headerRight: () => (
        <>
            {props.renderHeaderRight}
        </>
    ),
});

const styles = StyleSheet.create({
    backgroundHeader: {
        backgroundColor: utils.colors.primary,
        flex: 1,
    },
});

