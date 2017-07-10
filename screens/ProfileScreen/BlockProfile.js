import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
//components
import CustomScrollView from '../../components/CustomScrollView';
import TextTitie from '../../components/TextTitle';
import CustomButton from '../../components/CustomButton';
import ModalEditIcon from './ModalEditIcon';

//style
import styles from './styles/BlockProfileStyle';


function BlockProfile(props) {
    let { profile, icons, colors } = props;

    return (
        <CustomScrollView>
            <View style={styles.blockRootProfile}>
                {/*Title*/}
                <TextTitie>
                    Your Profile 
                </TextTitie>
                {/*End Title Icon*/}

                {/*Icon*/}
                <Entypo
                    name={profile.icon} size={160} 
                    color={profile.color} 
                />
                {/*End Icon*/}

                {/*Name*/}
                <View style={styles.blockName}>
                    <TextTitie> 
                        Name: 
                    </TextTitie> 

                    <TextTitie 
                        textColor="#337ab7" 
                    > 
                        {" " + profile.name} 
                    </TextTitie> 
                </View> 
                {/*End Name*/}

                {/*Edit Icon and Color*/} 
                <View style={styles.blockEditButton}> 
                    <CustomButton 
                        styleContainer={styles.btnEditIcon} 
                        textColor="white" 
                    > 
                        Edit Icon 
                    </CustomButton> 
                    <CustomButton 
                        styleContainer={styles.btnEditColor} 
                        textColor="black" 
                    >
                        Edit Color
                    </CustomButton>
                    <CustomButton
                        styleContainer={styles.btnEditIcon}
                        textColor="white"
                    >
                        Edit Name
                    </CustomButton>
                </View>
                {/*Edit Icon and Color*/}

                <ModalEditIcon>

                </ModalEditIcon>
            </View>
        </CustomScrollView>
    );
}

export default BlockProfile;