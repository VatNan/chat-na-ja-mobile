import React from 'react';
import { 
    Text,
    StyleSheet
} from 'react-native';

function TextTitle(props) {
    let { size, textColor } = props;

    return (
        <Text style={
            [
                styles.textTitle, 
                {
                    fontSize: (props.size) 
                        ? props.size
                        : 20,
                    color: (props.textColor)
                        ? props.textColor
                        : 'black'
                }
            ]
        }>
            { props.children }
        </Text>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default TextTitle;