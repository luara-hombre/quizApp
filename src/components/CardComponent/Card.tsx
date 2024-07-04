// components/CustomButton.tsx
import React from 'react';
import { CardContainer } from '@/components/CardComponent/Card.styles'

interface CustomCardProps {
    children: React.ReactNode;
    isGradient?: boolean;
    className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, isGradient, className }) => {
    return (
        <CardContainer className={`${className} ${isGradient ? 'card-gradient' : 'card'}`}>{children}</CardContainer>
    );
};

export default CustomCard;
