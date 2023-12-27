import React from 'react';
import Card from '../../UI/Card';
import { data } from '../../mock/data';

import './SectionCategories.scss';
import Button from '../../UI/Button';

const SectionCategories = () => {
    return (
        <section className='categories'>
            <div className='container'>
                <span className='categories__label'>Categories </span>
                <h2 className='categories__title'>Our Products</h2>

                <div className='categories__cards '>
                    {data.map((prod) => {
                        return <Card {...prod} key={prod.id} />;
                    })}
                </div>

                <Button className='categories__btn' icon={true}>
                    Load More
                </Button>
            </div>
        </section>
    );
};

export default SectionCategories;
