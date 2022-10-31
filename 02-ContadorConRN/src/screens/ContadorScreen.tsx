import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [ contador, setContador ] = useState<number>( 0 );


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador Screen: { contador }
            </Text>

            <Fab
                title="-1"
                onPress={ () => setContador( contador - 1 ) }
                position="btnLeft"
            />
            <Fab
                title="0"
                onPress={ () => setContador( 0 ) }
                position="btnCenter"
            />
            <Fab
                title="+1"
                onPress={ () => setContador( contador + 1 ) }
                position="btnRight"
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={ () => handleClick( '@substract' ) }
            >
                <View style={[ styles.fab, styles.btnSuccess ]}>
                    <Text style={ styles.fabText }>
                        -1
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={ styles.fabLocationC }
                onPress={ () => handleClick( '@reset' ) }
            >
                <View style={[ styles.fab, styles.btnSuccess ]}>
                    <Text style={ styles.fabText }>
                        0
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={ styles.fabLocationBR }
                onPress={ () => handleClick( '@add' ) }
            >
                <View style={[ styles.fab, styles.btnSuccess ]}>
                    <Text style={ styles.fabText }>
                        +1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative',
        top: -15,
    },
});