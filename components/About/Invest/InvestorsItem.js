import React from 'react'
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";

const ListItem = styled.div`
    padding-bottom: ${rem('40px')};
`;

const Text = styled.p`
    line-height: 1.67;
    font-size: ${rem('18px')};
    color: ${p => p.theme.colors.dark}
`

const Image = styled.div`
  background-image: url('/static/images/about/invest/cite.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: ${rem('24px')};
  height: ${rem('24px')};
  margin-bottom: ${rem('20px')};
`;

const Author = styled.p`
  font-weight: 600;
  color: ${p => p.theme.colors.dark};
  font-size: ${rem('18px')};
  line-height: ${rem('30px')};
  margin-bottom: ${rem('5px')}
`

const AuthorInfo = styled.p`
    font-size: ${rem('16px')};
    color: rgba(63,77,96,.6);
    line-height: 1.5rem;
`

class InvestorsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.itemRef = React.createRef();
    }
    componentDidMount() {
        this.setSpans();
    }
    setSpans = () => {
        const height = this.itemRef.current.clientHeight + 40;
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }
    render() {
        const { text, author, authorInfo } = this.props;
        return (
            <ListItem style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <div ref={this.itemRef}>
                    <Image/>
                    <Text>{text}</Text>
                    <Author>{author}</Author>
                    <AuthorInfo>{authorInfo}</AuthorInfo>
                </div>
            </ListItem>
        )
    }
}

export default InvestorsItem