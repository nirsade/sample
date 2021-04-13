import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

export default React.forwardRef((props, ref) => {

    const handleChange = () => {
        const file = ref.current.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            if (props.onChange) {
                props.onChange(reader.result)
            }
        }
        reader.readAsDataURL(file);
    }

    return (
        <StyledInput {...props} type='file' onChange={handleChange} ref={ref} />
    )
})


