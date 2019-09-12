import React from 'react';
import {Grid} from 'react-styled-flexboxgrid';

import {Section, SectionHeader} from '../styled';
import {Testimonials, TestimonialsWrapper, Wrapper, Quotes, Text, Author, ArrowLeft, ArrowRight} from './styled';
import AliceCarousel from 'react-alice-carousel';

class TestimonialsComponent extends React.Component {
  state = {
    currentIndex: 0
  }

  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  render() {
    return <Section grey small>
      <TestimonialsWrapper>
        <Grid className={`container testimonial-${this.state.currentIndex}`} >
          <SectionHeader>
            <h3><strong>This is why we do <span style={{whiteSpace: 'nowrap'}}>what we do</span></strong></h3>
          </SectionHeader>
          <Testimonials>
            <AliceCarousel
              dotsDisabled
              buttonsDisabled
              slideToIndex={this.state.currentIndex}
              onSlideChanged={this.onSlideChanged}
            >
              <Wrapper>
                <ArrowLeft onClick={this.slidePrev} className="arrow-desktop" />
                <Quotes className="quotes" />
                <Text>I found out about <strong>Lykke</strong> on the infamous bitcointalk.com beginning of 2017 and was amazed by the fact that they issued the world’s first security token which represents actual equity. <strong>Lykke</strong> did this fully regulated under swiss law. This was in sharp contrast to the ongoing ICO Mania back then during which mostly unregistered securities where sold. Lykke predicted and pioneered the rise of security tokens! I regularly use <strong>Lykke App</strong> and like its design and simplicity. The fiat ramp is super fast just like their support!</Text>
                <Author className="author"><span className="plus">+</span> Martin Fisher</Author>
                <ArrowRight onClick={this.slideNext} className="arrow-desktop" />
                <ArrowLeft onClick={this.slidePrev} className="arrow-mobile" />
                <ArrowRight onClick={this.slideNext} className="arrow-mobile" />
              </Wrapper>
              <Wrapper>
                <ArrowLeft onClick={this.slidePrev} className="arrow-desktop" />
                <Quotes className="quotes" />
                <Text>I am both an investor and a user of <strong>Lykke</strong>. I'm very satisfied with their products. The spreads are small, the market making is efficient and there's also the possibility to trade more traditional assets (Forex, Commodities, etc). Additionally, I fully trust the Team to continuously innovate as they did with LyCI. Finally, the customer service is impeccable. It's actually the only exchange that was able to recover BTC sent by mistake in a BTC wallet. Long live <strong>Lykke</strong>.</Text>
                <Author className="author"><span className="plus">+</span> William</Author>
                <ArrowRight onClick={this.slideNext} className="arrow-desktop" />
                <ArrowLeft onClick={this.slidePrev} className="arrow-mobile" />
                <ArrowRight onClick={this.slideNext} className="arrow-mobile" />
              </Wrapper>
              <Wrapper>
                <ArrowLeft onClick={this.slidePrev} className="arrow-desktop" />
                <Quotes className="quotes" />
                <Text>I have found out about <strong>Lykke</strong> when I was researching different exchanges at the beginning of 2017. At that time the idea of tokens representing shares was not very common. I liked how lykke seemed to be ahead of their time already then. This long term vision is still present. <strong>Lykke</strong> is also very transparent and the team dealing with client issues is readily available and responsive. They are open to ideas and feedback from the community  and try to resolve issues as quickly and efficiently as possible. This is one of the few exchanges that I feel like I can trust.</Text>
                <Author className="author"><span className="plus">+</span> Jule Ayr</Author>
                <ArrowRight onClick={this.slideNext} className="arrow-desktop" />
                <ArrowLeft onClick={this.slidePrev} className="arrow-mobile" />
                <ArrowRight onClick={this.slideNext} className="arrow-mobile" />
              </Wrapper>
              <Wrapper>
                <ArrowLeft onClick={this.slidePrev} className="arrow-desktop" />
                <Quotes className="quotes" />
                <Text>I was recommended <strong>Lykke</strong> from a good friend of mine. I used to be a retail trader (FX, commodities, equity indices) on the spot market. I realized that Lykke is headed by Richard Olsen and immediately knew that this crypto exchange was legitimate. Canadian based Oanda has been and still is the largest name in retail trading with top quality liquidity providers. Based solely on Richard Olsen’s good name, I decided to be a client of <strong>Lykke</strong>. App is great. User friendly. Service is fast. Very responsive.</Text>
                <Author className="author"><span className="plus">+</span> Edmund Chew</Author>
                <ArrowRight onClick={this.slideNext} className="arrow-desktop" />
                <ArrowLeft onClick={this.slidePrev} className="arrow-mobile" />
                <ArrowRight onClick={this.slideNext} className="arrow-mobile" />
              </Wrapper>
              <Wrapper style={{marginBottom: 60}}>
                <ArrowLeft onClick={this.slidePrev} className="arrow-desktop" />
                <Quotes className="quotes" />
                <Text>For me, <strong>Lykke</strong> is really unique. Nowhere else have I found a 100% fee-less trading experience which allows me to invest small amounts of money at a quick pace, without thinking about cost... And I'm yet to find any downside compared to costly competitors. The on-boarding process is painless and the mobile and web apps are really well designed (trading on-the-go with my smartphone is not just possible: it's actually easy). In case I have any questions, the support team shines by its rapidity and kindness, which for me is invaluable. Last but not least, I know that <strong>Lykke</strong> is one of the oldest crypto-exchanges around, and it shows in terms of security and regulatory compliance. I've been using Lykke for the past 3 years now, I know that I can trust them and I can't wait to see and use what they'll build next.</Text>
                <Author className="author"><span className="plus">+</span> Isabel Kiefer</Author>
                <ArrowRight onClick={this.slideNext} className="arrow-desktop" />
                <ArrowLeft onClick={this.slidePrev} className="arrow-mobile" />
                <ArrowRight onClick={this.slideNext} className="arrow-mobile" />
              </Wrapper>
            </AliceCarousel>
          </Testimonials>
        </Grid>
      </TestimonialsWrapper>
    </Section>;
  }
};

export default TestimonialsComponent;