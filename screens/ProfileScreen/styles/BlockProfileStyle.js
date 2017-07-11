import { 
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    blockRootProfile: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'center',
        // backgroundColor: 'blue',
        margin: 10
    },

    blockName: {
        marginVertical: 5,
        flexDirection: 'row'
    },

    blockEditButton: {
        marginVertical: 30,
        flex: 1,
        alignSelf: 'stretch',
        // backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'center'
    },

    btnEditIcon: {
        backgroundColor: '#337ab7',
        marginVertical: 5,
        width: 250,
        borderRadius: 50
    },

    btnEditColor: {
        backgroundColor: '#dddddd',
        marginVertical: 5,
        width: 250,
        borderRadius: 50
    },

    btnEditName: {
        backgroundColor: '#337ab7',
        marginVertical: 5,
        width: 250,
        borderRadius: 50
    },
});

export default styles;