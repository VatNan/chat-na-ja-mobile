import styled from 'styled-components/native';

const CustomScrollView = styled.ScrollView`
    flex: 1;
    backgroundColor: ${ props => (props.backgroundColor)
        ? props.backgroundColor
        : '#fff'
    };
    flexDirection: column;
`;

export default CustomScrollView;