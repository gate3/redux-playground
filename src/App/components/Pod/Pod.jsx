//@flow
import React from 'react';
import type {PodType} from './Pod.type';
import {NavLink} from 'react-router-dom';

const Pod = ({podcast}:PodType)=>(
    <article className="episode">
        <h2 className="episode__number">{podcast.id}</h2>
        <div className="episode__media">
            <a href="detail.html" className="episode__image"></a>
        </div>
        <div className="episode__detail">
            <a href="detail.html" className="episode__title">
                <h4>{podcast.name}</h4>
            </a>
            <p className="episode__description">
                {podcast.description}
            </p>
        </div>
    </article>
);

export default Pod;
