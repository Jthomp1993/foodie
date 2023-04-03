import StyledFoodieItem from "@/styles/StyledFoodieItem";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const FoodieItem = ({ data }) => {

    
  return (
    <Link href={`/eat/${data.slug}`}>
    <StyledFoodieItem>
            <div className="item__wrapper">
                <div className="content">
                    <div className="img__wrapper">
                        <Image src={data.image ? data.image : '/images/eat/dishoom.jpg'} alt={data.name} width={200} height={150} />
                        <div className="img__overlay"></div>
                    </div>
                    <div className="info">
                        <h2 className="name color">{`${data.name}`.toUpperCase()}</h2>
                        <div className="info__item">
                            <h5 className='info__heading color'>Location:</h5>
                            <p className='color'>{data.location}</p> 
                        </div>
                        <div className="info__item">
                            <h5 className='color'>Cuisine:</h5>
                            <p className='color'>{data.cuisine}</p> 
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <BsArrowRight className='color' />
                </div>
            </div>
            
        
    </StyledFoodieItem>
    </Link>
  )
}

export default FoodieItem;
