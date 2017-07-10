import React from 'react';
import {
    Modal,
    StyleSheet,
    //test
    TouchableHighlight,
    View,
    Text
} from 'react-native';
//components
import BackgroundModal from '../../components/BackgroundModal';
import EmptyFlexBox from '../../components/EmptyFlexBox';

function BlockModalEditIcon() {
    return (
        <Modal
            animationType={"slide"} 
            transparent={true} 
            visible={false} 
            onRequestClose={() => { alert("Modal has been closed.") }} 
        > 
            <BackgroundModal /> 
            <EmptyFlexBox flex={1} /> 
            <View style={{ flex: 2, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center' }}> 
            </View> 
            <EmptyFlexBox flex={1} /> 
        </Modal> 
    ); 

} 

const styles = StyleSheet.create({

});

export default BlockModalEditIcon;
