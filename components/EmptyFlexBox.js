import styled from 'styled-components/native';

/**
 * @description for create empty block by flexbox
 * @param props.flex is flex num of component
 */
const EmptyFlexBox = styled.View`
    flex: ${ props => (props.flex)
        ? props.flex
        : 0
    };
`;

export default EmptyFlexBox;