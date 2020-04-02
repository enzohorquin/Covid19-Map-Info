import React from 'react';
import TwoCol from '../TwoCol';
import './styles.css';

const data = 
[
    {
        src: '/doctor-woman.svg',
        header: 'Titulo 1',
        info: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    },
    {
        src: '/mask-man.svg',
        header: 'Titulo 2',
        info: 'asdadasdasdadadadsasdasdasdasdasdasdasdasdasdasdasdasdasdasda',
    },
    {
        src: '/remote-work-woman.svg',
        header: 'Titulo 3',
        info: 'asdadasdasdasdasdasdasdasdasdasdasdadsadasdasdasd',
    }
]

const ScreenCards = () => 
<div className="full-width-row">
{
    data.map((item, i) => <TwoCol 
                                key={i}
                                styles={'two-col-container__img-container__img'} 
                                src={item.src} 
                                header={item.header} 
                                info={item.info}
                                bg={ i % 2 === 0 ? null : 'cta-bg'}
                            />)
}
</div>                 
export default ScreenCards;