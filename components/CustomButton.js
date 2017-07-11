import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
//component
import TextTitle from './TextTitle';

/**
 * 
 * @param {*} props is object  
 * @param props.styleContainer is root style of component (stylesheet)
 * @param props.children is title of component 
 * @param props.handler is callback function call when click button 
 * @param props.textColor color of text
 */
function CustomButton(props) {
    let {
        styleContainer,
        children,
        handler,
        textColor
    } = props;

    //TODO onpress
    return (
        <TouchableOpacity 
            style={[ styles.blockButton, styleContainer ]}
            onPress={handler}
        >
            <TextTitle textColor={textColor} size={17}>
                { children }
            </TextTitle>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    blockButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: 'red'
    }
});

export default CustomButton;