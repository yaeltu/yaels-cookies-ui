import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    height: 300px;
    width: 300px;
    cursor: pointer;
    text-align: center;
    background-color: #000;
    color: #fff;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.3333%;
`

const Image = styled.img`
    width: 100%;
    height: 240px;
`

const Title = styled.div`
    margin:auto;
    font-size: 1.5rem;
`

const Category = ({image_src, title, link}) => {

    return (
        <Link to={link} style={{textDecoration:'none'}}>
            <Container>
                <Image src={image_src} alt={title} />
                <Title>{title}</Title>
            </Container>
        </Link>
    )
}

export default Category;