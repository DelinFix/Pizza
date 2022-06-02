import React from 'react'

import style from '../styles/NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={style.content}>
            <div className={style.container}>
                <h1 className={style.root}>
                    Ничего не найдено
                </h1>
            </div>
        </div>
    );
};

export default NotFound;
