// components/CustomButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { ButtonContainer } from '@/components/ButtonComponent/Button.styles'

interface CustomButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';

}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, disabled, children, size = 'medium' }) => {
    return (
        <ButtonContainer>
            <Button variant="contained" color="primary" fullWidth onClick={onClick} disabled={disabled} className={`btn-${size}`}>
                {children}
            </Button>
        </ButtonContainer>
    );
};

export default CustomButton;
