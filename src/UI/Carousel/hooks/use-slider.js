import { useCallback, useEffect, useState } from 'react';
import { items } from '../data';


export const useSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        if (currentIndex !== items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        if (currentIndex === items.length - 1) {
            setCurrentIndex(0);
        }
    }, [currentIndex]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            return nextSlide();
        }, 2000);

        return () => {
            clearTimeout(timerId);
        };
    }, [nextSlide]);



    return [currentIndex, items]
};
