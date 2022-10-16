import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { IFab } from '../interfaces/IFab';

export const Fab = ( { title, onPress, buttonPosition }: IFab ) => {
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                style={ [ styles.fabLocation, ( buttonPosition === 'btnLeft' ) ? styles.left : styles.right ] }
                onPress={ onPress }
            >
                <View style={ [ ( buttonPosition === 'btnLeft' ) ? styles.btnDanger : styles.btnSuccess, styles.fab ] }>
                    <Text style={ styles.fabText }>
                        { title }
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={ [ styles.fabLocation, ( buttonPosition === 'btnLeft' ) ? styles.left : styles.right ] }
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple( '#C8BAF4', false, 30 ) }
                >
                    <View style={ [ ( buttonPosition === 'btnLeft' ) ? styles.btnDanger : styles.btnSuccess, styles.fab ] }>
                        <Text style={ styles.fabText }>
                            { title }
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return ( Platform.OS === 'ios' ) ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: { position: 'absolute', bottom: 20 },
    right: { right: 25 },
    left: { left: 25 },
    btnDanger: { justifyContent: 'center', backgroundColor: '#C82333', width: 60, height: 60, borderRadius: 100 },
    btnSuccess: { backgroundColor: '#5856D6', width: 60, height: 60, borderRadius: 100, justifyContent: 'center' },
    fabText: { textAlign: 'center', color: 'white', fontSize: 30 },
    fab: { shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8 }
})
