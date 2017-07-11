import {
    StyleSheet
} from 'react-native';
import Layout from '../../../constants/Layout'

const styles = StyleSheet.create({
    blockBody: {
        flex: 3,
        padding: 15,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center'
    },

    blockScrollIcons: {
        flex: 1,
        flexDirection: 'row',
        // alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        // backgroundColor: 'red'
    },

    blockIcon: {
        // backgroundColor: 'gray',
        flex: 0,
        flexBasis: 50,
        margin: 5
    },


    btnSave: {
        backgroundColor: '#337ab7',
        marginVertical: 5,
        width: 250,
        flex: 0,
        height: 40,
        alignSelf: 'center',
        borderRadius: 50
    },

    btnClose: {
        backgroundColor: 'red',
        marginVertical: 5,
        width: 250,
        flex: 0,
        height: 40,
        alignSelf: 'center',
        borderRadius: 50
    }

});

export default styles;
