import React from 'react';
import styled from 'styled-components'
import rem from "polished/lib/helpers/rem";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem('20px')} 0;
`;

const Image = styled.div`
  background-image: url(${p => p.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: ${rem('42px')};
  height: ${rem('42px')};
  flex: 0 0 20%
`;

const Content = styled.div`
    p {
      line-height: ${rem('30px')};
      font-size: ${rem('18px')};
      color: ${p => p.theme.colors.dark};
      margin-bottom: ${rem('4px')}
    }
`;

const Link = styled.a`
  color: ${p => p.theme.colors.primary}
`;

const MidDot = styled.span`
  margin: 0 ${rem('8px')}
`;


const DisclosureItem = ({ settings }) => {
    const {url, title, href, href2, linkText, linkText2} = settings;
    let secondLink = '';
    if(href2 && linkText2) {
        secondLink = (
            <>
                <MidDot>·</MidDot>
                <Link href={href2}>{linkText2}</Link>
            </>
        )
    }
    return (
        <Wrapper>
            <Image url={url}/>
            <Content>
                <p>{title}</p>
                <Link href={href}>{linkText}</Link>
                { secondLink }
            </Content>
        </Wrapper>
    )
}

export default DisclosureItem