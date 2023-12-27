import { useSlider } from './hooks/use-slider';
import { IoRadioButtonOff as RadioBtn } from 'react-icons/io5';

import CarouselItem from './CarouselItem';

import './Carousel.scss';

const Carousel = () => {
    const [currentIndex, items] = useSlider();

    return (
        <div className='carousel'>
            <div className='inner'>
                {items.map((item, index) => {
                    return (
                        <CarouselItem
                            key={item.name}
                            {...item}
                            index={index}
                            currentIndex={currentIndex}
                        />
                    );
                })}
            </div>
            <div className='indicators'>
                {items.map((_, i) => {
                    return (
                        <RadioBtn
                            className={
                                currentIndex === i
                                    ? 'indicators__btn active'
                                    : 'indicators__btn'
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
