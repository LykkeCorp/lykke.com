import React from 'react'
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";

const Image = styled.div`
  background-image: url('/static/images/about/invest/cite.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: ${rem('24px')};
  height: ${rem('24px')};
`;

const Author = styled.p`
  
`

const AuthorInfo = styled.p`

`

export default ({ author, authorInfo, text }) => {
    return (
        <div>
            <Image/>
            <p>{text}</p>
            <Author>{author}</Author>
            <AuthorInfo>{authorInfo}</AuthorInfo>
        </div>
    )
}