import React from 'react';
import { Card as AntCard, Tag } from 'antd';

interface CardProps {
    title: string;
    description: string;
    tag?: string;
    color?: string;
}

const Card: React.FC<CardProps> = ({title, description, tag = "", color = "magenta"}) => {
    return (
        <AntCard title={title}>     {description}

        {tag && <Tag color={color}>
            {tag}
        </Tag>}
        </AntCard>
    );
}

export default Card;