import React from 'react';
import publ from '../img/publ.png';
import vid from '../img/vid.png';
import mar from '../img/mar.png';

export function row3 () {
    return (
        <div className='row3'>
                <div>
                <img src={publ} alt="..."/>
                </div>
                <span className='publicationsVideosMarks'> <b>ПУБЛИКАЦИИ</b></span>
                <div>
                <img src={vid} alt="..."/>
                </div>
                <span className='publicationsVideosMarks'> <b>ВИДЕО</b></span>
                <div>
                <img src={mar} alt="..."/>
                </div>
                <span className='publicationsVideosMarks'> <b>ОТМЕТКИ</b></span>
                <div>
                <img src={mar} alt="..."/>
                </div>
                <span className='publicationsVideosMarks'> <b>ОТМЕТКИ</b></span>
        </div>
    )
}

export default row3