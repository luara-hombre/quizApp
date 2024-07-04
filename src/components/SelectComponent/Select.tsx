// components/CustomSelect.tsx
import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';

import { SelectContainer } from '@/components/SelectComponent/Select.styles'

interface CustomSelectProps {
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    options: { id: number; name: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, value, onChange, options }) => {
    return (
        <SelectContainer>
            <FormControl fullWidth margin="none">
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    label={label}
                >
                    {options.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </SelectContainer>
    );
};

export default CustomSelect;
