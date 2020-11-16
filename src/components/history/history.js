import React from 'react';
import { Chrono } from 'react-chrono';
import { accent, primary, white, primaryLighten } from 'constants/theme';
// import { Container } from './styles';

const History = ({ items }) => {

    let chronoItems = items.map(item => ({ title: item.title, cardTitle: item.text }))

    return (
        <div style={{ height: '600px' }}>

            <Chrono
                items={chronoItems}
                theme={{ primary: primaryLighten, secondary: accent }}
                cardHeight={250}
                cardPositionHorizontal='TOP'
                mode="VERTICAL"
                itemWidth={200}
                scrollable={true}
            />
        </div>
    )
}


export default History;