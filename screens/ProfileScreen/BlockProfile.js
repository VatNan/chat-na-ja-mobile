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
import ModalEditColor from './ModalEditColor';
//style
import styles from './styles/BlockProfileStyle';


function BlockProfile(props) {
    let { 
        profile, 
        icons, 
        colors,
        visibleModalIcons,
        visibleModalColors,
        setVisibleModalIcons,
        setVisibleModalColors 
    } = props;

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

                    <TextTitie textColor="#337ab7"> 
                        {" " + profile.name} 
                    </TextTitie> 
                </View> 
                {/*End Name*/}

                {/*Edit Icon and Color*/} 
                <View style={styles.blockEditButton}> 
                    <CustomButton 
                        handler={() => { setVisibleModalIcons(true); }}
                        styleContainer={styles.btnEditIcon} 
                        textColor="white" 
                    > 
                        Edit Icon 
                    </CustomButton> 
                    <CustomButton 
                        handler={() => { setVisibleModalColors(true); }}
                        styleContainer={styles.btnEditColor} 
                        textColor="black" 
                    >
                        Edit Color
                    </CustomButton>
                    <CustomButton
                        styleContainer={styles.btnEditName}
                        textColor="white"
                    >
                        Edit Name
                    </CustomButton>
                </View>
                {/*Edit Icon and Color*/}

                {/*Modals*/}
                    <ModalEditIcon 
                        icons={icons} 
                        visibleModalIcons={visibleModalIcons} 
                        setVisibleModalIcons={setVisibleModalIcons} 
                    />

                    <ModalEditColor 
                        colors={colors} 
                        visibleModalColors={visibleModalColors} 
                        setVisibleModalColors={setVisibleModalColors} 
                    />
                {/*End Modals*/}

            </View>
        </CustomScrollView>
    );
}

export default BlockProfile;