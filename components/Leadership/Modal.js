import React from 'react'
import styled from 'styled-components';
import {rem, rgba} from 'polished';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 15px;
  z-index: 1050;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  
  @media all and (max-width: 767px) {
    padding: 0;
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Inner = styled.div`
  height: 100%;
`;

export const Body = styled.div`
  padding: ${rem('40px')};
`;

export const Header = styled.div`
  width: 100%;
  height: ${rem('455px')};
  border-radius: 8px 8px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media all and (max-width: 767px) {
    border-radius: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  width: ${rem('570px')};
  max-width: 100%;
  margin: ${rem('30px')} auto ${rem('120px')};
  background-color: ${p => p.theme.colors.white};
  border-radius: 8px;
  pointer-events: all;
  
  @media all and (max-width: 767px) {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${rem('6px')};
`;

export const Desc = styled.div`
  color: ${p => p.theme.colors.greyBluey};
  font-weight: 400;
  font-size: ${rem('22px')};
  line-height: ${rem('36px')};
`;

export const Text = styled.p`
  margin: ${rem('20px')} 0;
  white-space: pre-line;
  font-size: 1rem;
  line-height: 1.69;
`;

export const Email = styled.div`
  margin-bottom: ${rem('16px')};
  
  a {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }
`;

export const Social = styled.div`
  margin-bottom: ${rem('16px')};
  
  a {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }
`;

export const ButtonClose = styled.button`
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: ${rem('60px')};
    height: ${rem('60px')};
    margin: 2.5rem auto;
    text-align: center;
    opacity: .7;
    border: 0;
    background: url(/static/circle_close.svg) center no-repeat;
    background-size: cover;
    outline: none;
    appearance: none;
    cursor: pointer;
    transition: opacity  ${p => p.theme.transition.primary};

    &:hover {
      opacity: 1;
    }
    
    @media all and (max-width: 767px) {
      top: 10px;
      right: 10px;
      left: auto;
      margin: 0;
      width: 30px;
      height: 30px;
    }
`;

const Backdrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${p => rgba(p.theme.colors.dark, .8)};
    opacity: .6;
    
    @media all and (max-width: 767px) {
      display: none;
    }

`;

const InnerTable = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
`;

const InnerRow = styled.div`
  display: table-row;
  height: 100%;
`;

const InnerCell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Modal = (props) => {
    const {imageURL, name, position, info, email, social} = props.data;
    return (
      <Wrapper>
        <Backdrop onClick={props.handleModalOpen}/>
        <Inner>
          <InnerTable>
            <InnerRow>
              <InnerCell>
                <Content>
                  <Header style={{backgroundImage: 'url(' + imageURL +')'}}/>
                  <Body>
                  <Title>{name}</Title>
                  {position && <Desc>{position}</Desc>}
                  {info && <Text>{info}</Text>}

                  {email || social ? <h5>Contacts:</h5> : null}
                  {email && <Email><a href={`mailto: ${email}`}>{email}</a></Email>}
                  {social && <Social><a href={social.link}>{social.name}</a></Social>}
                  </Body>
                  <ButtonClose type="button" onClick={props.handleModalOpen}/>
                </Content>
              </InnerCell>
            </InnerRow>
          </InnerTable>
        </Inner>
      </Wrapper>
    )
}

export default Modal;