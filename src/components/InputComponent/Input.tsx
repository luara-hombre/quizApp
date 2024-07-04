// components/CustomInput.tsx
import React from 'react';
import { TextField } from '@mui/material';
import { InputContainer } from '@/components/InputComponent/Input.styles'

interface CustomInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, value, onChange }) => {
    return (
        <InputContainer>
            <TextField
                fullWidth
                label={label}
                value={value}
                onChange={onChange}
                margin="normal"
            />
        </InputContainer>

    );
};

export default CustomInput;
