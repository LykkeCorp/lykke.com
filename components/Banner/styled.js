import styled, {keyframes} from 'styled-components';

const resizeBanner = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Banner = styled.div`
    bottom: 93px;
    position: fixed;
    left: 50%;
    width: 770px;
    margin-left: -385px;
    z-index: 1111;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0 8px 50px 0 rgba(63, 77, 96, 0.4), 0 5px 5px 0 rgba(63, 77, 96, 0.05);
    padding: 15px 25px;
    animation-name: ${resizeBanner};
    animation-duration: 0.4s;

    &:before {
        content: "";
        height: 90%;
        width: 2px;
        background-color: ${p => p.theme.colors.primary};
        display: block;
        position: absolute;
        left: 0px;
        top: 10px;
    }

    @media all and (max-width: 800px) {
        left: 0;
        margin-left: 0px;
        width: 100%;
    }
`;

export const BannerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BannerTitle = styled.div`
    font-size: ${p => p.theme.fontSize.lead};
    font-weight: 600;
    line-height: 1.67;
    color: ${p => p.theme.colors.black};
`;

export const BannerText = styled.div`
    font-size: ${p => p.theme.fontSize.lead};
    line-height: 1.67;
    color: ${p => p.theme.colors.dark};
    padding-bottom: 14px;
    border-bottom: 1px solid ${p => p.theme.colors.greyLight};

    a {
        text-decoration: underline;
    }
`;

export const CookieBannerButtons = styled.div`
    float: right;
    padding-top: 12px;
`;

export const CookiePolicyIcon = styled.span`
    &:before {
        font-size: 30px;
        margin-right: 15px;
    }
`;

export const CookiePolicyButton = styled.a`
    cursor: pointer;
    font-size: ${p => p.theme.fontSize.primary};
    font-weight: 600;
    line-height: 30px;
    color: ${p => p.theme.colors.black};
`;

export const AgreeButton = styled.a`
    cursor: pointer;
    font-size: ${p => p.theme.fontSize.primary};
    font-weight: 600;
    line-height: 1.5;
    margin-right: 20px;
    color: ${p => p.theme.colors.primary};
`;