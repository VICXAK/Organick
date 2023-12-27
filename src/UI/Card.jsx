import './Card.scss';

const Card = ({ title, category, oldPrice, newPrice, img, rating }) => {
    return (
        <div className='product'>
            <span className='product__category'>{category}</span>
            <img className='product__picture' src={img} alt={title} />
            <span className='product__title'>{title}</span>
            <div className='product__content'>
                <div className='product__price'>
                    <span className='product__price-old'>{oldPrice}.00</span>
                    <span className='product__price-new'>{newPrice}.00</span>
                </div>
                <span className='product__rating'>{rating}</span>
            </div>
        </div>
    );
};

export default Card;
