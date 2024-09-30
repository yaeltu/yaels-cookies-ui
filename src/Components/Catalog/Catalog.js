import styled from "styled-components";
import boxesImg from '../../assets/boxes_example.jpeg';
import Category from '../Category/Category';

const Title = styled.div`
    text-align: center;
    padding: 10px 0;
    font-size: 3rem;
`

const ComponentContainer = styled.div`
    padding: 10px 70px;
`

const CatalogContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    
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
            </CatalogContainer>
        </ComponentContainer>
    )
}

export default Catalog;