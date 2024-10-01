import styled from "styled-components";
import boxesImg from '../../assets/boxes_example.jpeg';
import cakesImg from '../../assets/cakes.jpg';
import tartsImg from '../../assets/tarts.jpg';
import cookiesImg from '../../assets/cookies.jpg';
import babkasImg from '../../assets/babkas.jpg';
import moussesImg from '../../assets/mousses.jpg';
import Category from '../Category/Category';


const Title = styled.div`
    text-align: center;
    padding: 10px 0;
    font-size: 3rem;
`

const ComponentContainer = styled.div`
    padding: 10px 50px;
`

const CatalogContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    
`

const Catalog = () => {

    return (
        <ComponentContainer>
            <Title>קטלוג מוצרים</Title>
            <CatalogContainer>
                <Category
                image_src={boxesImg}
                title={"מארזי שי"}
                link={"/boxes"}
                />
                <Category
                    image_src={cakesImg}
                    title={"עוגות בחושות"}
                    link={"/cakes"}
                />
                <Category
                    image_src={tartsImg}
                    title={"טארטים"}
                    link={"/tarts"}
                />
                <Category
                    image_src={cookiesImg}
                    title={"עוגיות"}
                    link={"/cookies"}
                />
                <Category
                    image_src={babkasImg}
                    title={"עוגות שמרים"}
                    link={"/babkas"}
                />
                <Category
                    image_src={moussesImg}
                    title={"עוגות מוס"}
                    link={"/mousses"}
                />
            </CatalogContainer>
        </ComponentContainer>
    )
}

export default Catalog;