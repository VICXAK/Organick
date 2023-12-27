import starRating from '../../assets/star.svg';

const CarouselItem = ({
    name,
    description,
    img,
    position,
    index,
    currentIndex,
}) => {
    return (
        <div
            className={
                currentIndex === index
                    ? 'carousel-item active'
                    : 'carousel-item'
            }
        >
            <img className='carousel-item__person' src={img} alt={name} />
            <img
                className='carousel-item__rating'
                src={starRating}
                alt='Start Rating'
            />
            <p className='carousel-item__description'>{description}</p>
            <h4 className='carousel-item__name'>{name}</h4>
            <span className='carousel-item__position'>{position}</span>
        </div>
    );
};

export default CarouselItem;
