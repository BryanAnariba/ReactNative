import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { IFab } from '../interfaces/IFab';

export const Fab = ( { title, onPress, position = 'btnCenter' }: IFab ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                // style={ position ===' btnLeft' ? styles.fabLocationBL : position === 'btnRight' ? styles.fabLocationBR : styles.fabLocationC }
                style={ [ styles.fabLocation, ( position === 'btnLeft' ) ? styles.left : ( position === 'btnRight' ? styles.right : styles.center ) ] }
                onPress={ onPress }
                activeOpacity={ 0.8 }
            >
                <View style={[ styles.fab, styles.btnSuccess ]}>
                    <Text style={ styles.fabText }>
                        { title }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                // style={ position ===' btnLeft' ? styles.fabLocationBL : position === 'btnRight' ? styles.fabLocationBR : styles.fabLocationC }
                style={ [ styles.fabLocation, ( position === 'btnLeft' ) ? styles.left : ( position === 'btnRight' ? styles.right : styles.center ) ] }>
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple( 'gray', false, 32 ) }
                >
                    <View style={[ styles.fab, styles.btnSuccess ]}>
                        <Text style={ styles.fabText }>
                            { title }
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return ( ( Platform.OS === 'android' ) ? android() : ios() );

};

const styles = StyleSheet.create({
    // fabLocationBR: {
    //     position: 'absolute',
    //     bottom: 25,
    //     right: 20,
    // },
    // fabLocationC: {
    //     position: 'absolute',
    //     bottom: 25,
    //     alignSelf: 'center',
    // },
    // fabLocationBL: {
    //     position: 'absolute',
    //     bottom: 25,
    //     left: 20,
    // },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 20,
    },
    left: {
        left: 20,
    },
    center: {
        alignSelf: 'center',
    },
    fab: {
        width: 65,
        height: 65,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fabText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    btnSuccess: {
        backgroundColor :'#5856D6',
    },
});