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

//stylesheet
import styles from './styles/ModalEditIconStyle';

/**
 * TODO
 */
class ModalEditIcon extends Component {
    
    state = {
        iconIsSelect: null
    }

    setIconIsSelect = (index) => {
        this.setState({
            iconIsSelect: index
        }); 
    }

    isActive = (index) => {
        if (this.state.iconIsSelect === index) {
            return {
                backgroundColor: 'yellow'
            };
        }

        return {
            backgroundColor: '#fff'
        };
    }

    renderIcon = (icons) => {
        return icons.map((icon, index) => (
            <TouchableOpacity 
                key={icon.name + index} 
                style={[styles.blockIcon, this.isActive(index) ]} 
                onPress={() => { this.setIconIsSelect(index) }} 
            > 
                <Entypo 
                    name={icon.name}
                    size={50} 
                    color="blue"
                />
            </TouchableOpacity>
        ));
    }

    modalClose = () => {
        let { setVisibleModalIcons } = this.props;
        //set initial state before modal hide
        this.setState({
            iconIsSelect: null
        });
        //modal hide
        setVisibleModalIcons(false);
    } 

    render() {
        let {
            icons,
            visibleModalIcons
        } = this.props;

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={visibleModalIcons}
                onRequestClose={() => { alert("Modal has been closed.") }}
            >
                <BackgroundModal />
                <EmptyFlexBox flex={1} />
                <View style={styles.blockBody}>
                    <ScrollView 
                        scrollEnabled={true} 
                        contentContainerStyle={styles.blockScrollIcons}
                    >
                        { this.renderIcon(icons) }
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

export default ModalEditIcon;
