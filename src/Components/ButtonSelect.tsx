import React from 'react';
import { Button, Flex } from 'antd';

const Buttons: React.FC = () => (
    <Flex gap="small" wrap="wrap">
        <Button>Descartar</Button>
        <Button type="primary">Usar</Button>
    </Flex>
);

export default Buttons;