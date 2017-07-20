import React, { Component } from 'react';
import {
    Modal,
    ScrollView,
    //test
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
//components
import BackgroundModal from '../../components/BackgroundModal';
import EmptyFlexBox from '../../components/EmptyFlexBox';
import CustomButton from '../../components/CustomButton';
import TextTitie from '../../components/TextTitle';
//stylesheet
import styles from './styles/ModalEditColorStyle';

/**
 * TODO
 */
class ModalEditColor extends Component {
    
    state = {
        colorIsSelect: null
    }

    setColorIsSelect = (index) => {
        this.setState({
            colorIsSelect: index
        }); 
    }

    isActive = (index) => {
        if (this.state.colorIsSelect === index) {
            return {
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: '#69fcff'
            };
        }

        return {
            borderWidth: 0,
        };
    }

    renderColor = (colors) => {
        return colors.map((color, index) => (
            <TouchableOpacity 
                key={color.name + index} 
                style={[styles.blockColor, this.isActive(index) ]} 
                onPress={() => { this.setColorIsSelect(index) }} 
            > 
                {/*<Entypo 
                    name={color.name}
                    size={50} 
                    color="blue"
                />*/}
                <View style={[
                    styles.color, 
                    {backgroundColor: color.name}
                ]}>

                </View>
            </TouchableOpacity>
        ));
    }

    modalClose = () => {
        let { setVisibleModalColors } = this.props;
        //set initial state before modal hide
        this.setState({
            colorIsSelect: null
        });
        //modal hide
        setVisibleModalColors(false);
    } 

    render() {
        let {
            colors,
            visibleModalColors
        } = this.props;

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={visibleModalColors}
                onRequestClose={() => { alert("Modal has been closed.") }}
            >
                <BackgroundModal />
                <EmptyFlexBox flex={1} />
                <View style={styles.blockBody}>
                    <TextTitie>
                        Edit Color
                    </TextTitie>
                    <ScrollView 
                        scrollEnabled={true} 
                        contentContainerStyle={styles.blockScrollColors}
                    >
                        { this.renderColor(colors) }
                    </ScrollView>
                    <View >
                        <CustomButton
                            styleContainer={styles.btnSave}
                            textColor="white"
                            handler={() => { console.log("TODO") }}
                        >
                            Save
                        </CustomButton>
                        <CustomButton 
                            styleContainer={styles.btnClose}
                            textColor="white"
                            handler={this.modalClose}
                        >
                            Close
                        </CustomButton>
                    </View>
                </View>
                <EmptyFlexBox flex={1} />
            </Modal>
        );
    }

}

export default ModalEditColor;