import { Card as AntCard, Tag } from 'antd';


const Card = ({title, description, tag, color}) => {
    return (
        <AntCard title={title}>     {description}

        {tag && <Tag color={color || "magenta"}>
            {tag}
        </Tag>}
        </AntCard>
    );
}

export default Card;