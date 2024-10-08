// ProgressBar.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemedText } from './ThemedText';
import { Dimensions } from 'react-native';

type ProgressBarProps = {
    progress: number;
    color?: string;
    height?: number;
};

const { height } = Dimensions.get('window');

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = '#CBD77E', height = 40 }) => {
    return (
        <View style={styles.container}>
            <ThemedText variant="title2" style={styles.text}>Your calorie goal today</ThemedText>
            <View style={styles.progressBar1}>
                <View
                    style={[
                        styles.progressBar2,
                        { width: `${progress}%`, backgroundColor: color, height },
                    ]}
                />
                <ThemedText variant="title2" color="white" style={styles.textProgress}>Work in progress</ThemedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        height: 100,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    progressBar1: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#E0E0E0',
        borderRadius: 7,
        overflow: 'hidden',
        height: 40
    },
    progressBar2: {
        height: '100%',
        borderRadius: 5,
    },
    text : {
        textAlign: 'center',
        marginVertical: 10
    },
    textProgress : {
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: 20
    }
});

export default ProgressBar;