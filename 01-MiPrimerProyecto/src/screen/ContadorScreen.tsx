import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [ contador, setContador ] = useState<number>( 0 );
    // const opeacionContador = ( option: string ) => {
    //     switch ( option ){
    //         case '@incrementar':
    //             setContador( contador + 1 );
    //         break;
    //         case '@decrementar':
    //             setContador( contador - 1 );
    //         break;
    //     }
    // }


    return (
        <View style={ styles.container }>
            <Text style={ styles.textStyle }>Contador { contador }</Text>
            <Fab title="-" buttonPosition="btnLeft" onPress={ () => setContador( contador - 1 ) } />
            <Fab title="+" buttonPosition="btnRight" onPress={ () => setContador( contador + 1 ) } />

            {/* <TouchableOpacity
                style={ styles.fabLocationRight }
                onPress={ () => opeacionContador( '@incrementar' ) }
            >
                <View style={ styles.fabRigh }>
                    <Text style={ styles.fabTextRight } >
                        +
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.fabLocationLeft }
                onPress={ () => opeacionContador( '@decrementar' ) }
            >
                <View style={ styles.fabLeft }>
                    <Text style={ styles.fabTextLeft }>
                        -
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: { textAlign: 'center', fontSize: 40, position: 'relative', top: -10 },
    container: { flex: 1, justifyContent: 'center' },
    // fabLocationRight: { position: 'absolute', bottom: 20, right: 25 },
    // fabRight: { backgroundColor: '#5856D6', width: 60, height: 60, borderRadius: 100, justifyContent: 'center' },
    // fabTextRight: { color: 'white', fontSize: 30, alignSelf: 'center' },
    // fabLeft: { justifyContent: 'center', backgroundColor: '#C82333', width: 60, height: 60, borderRadius: 100 },
    // fabTextLeft: { fontSize: 30, color: 'white', alignSelf: 'center' },
    // fabLocationLeft: { position: 'absolute', bottom: 25, left: 25  },
});


