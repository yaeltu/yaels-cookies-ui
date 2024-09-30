import styled from "styled-components";
import bannerImage from '../../assets/banner_photo.jpg';

const BannerDiv = styled.div`
    width: 100%;
    height: 60%;
    background-image: url(${bannerImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
`

const Banner = () => {
    return (
        <BannerDiv />

    )
}

export default Banner;