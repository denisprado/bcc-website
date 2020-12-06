import React from 'react';

import { Container, ContainerItem } from './styles';
import Image from 'components/image';

const ImageGrid = ({ items }) =>
    <Container>
        {items && items.map((item) =>
            <ContainerItem key={item.id}>
                <Image image={item.image} title={item.title} width={item.width} />
            </ContainerItem>
        )}
    </Container>


export default ImageGrid;