import styled from 'styled-components/native';
import Layout from '../../constants/Layout';

const ChatBox = styled.View`
    width: ${Layout.window.width - 60};
    height: 150;
    padding: 20px;
    marginVertical: 10;
    borderRadius: 30;

    ${props => (props.mode === 'me')  
        ? 
        `
            marginRight: 5;
            alignSelf: flex-end;
            backgroundColor: #2f95dc;
        `
        : 
        `
            marginLeft: 5;
            alignSelf: flex-start;
            backgroundColor: #cccccc;
        `
    }
`;

//TODO proptype

export default ChatBox;