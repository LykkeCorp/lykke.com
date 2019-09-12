
import styled from 'styled-components';

export const TestimonialsWrapper = styled.div`

  .testimonial-0 {
    margin-bottom: -90px;
  }

  .testimonial-1 {
    margin-bottom: -90px;
  }

  .testimonial-2 {
    margin-bottom: -90px;
  }

  .testimonial-3 {
    margin-bottom: -90px;
  }

  .testimonial-4 {
    margin-bottom: -50px;
  }

  @media all and (max-width: 1080px) {
    .testimonial-0 {
      margin-bottom: -130px;
    }

    .testimonial-1 {
      margin-bottom: -130px;
    }

    .testimonial-2 {
      margin-bottom: -130px;
    }

    .testimonial-3 {
      margin-bottom: -130px;
    }

    .testimonial-4 {
      margin-bottom: -50px;
    }
  }

  @media all and (max-width: 767px) {
    .testimonial-0 {
      margin-bottom: -170px;
    }

    .testimonial-1 {
      margin-bottom: -210px;
    }

    .testimonial-2 {
      margin-bottom: -155px;
    }

    .testimonial-3 {
      margin-bottom: -190px;
    }

    .testimonial-4 {
      margin-bottom: 0px;
    }
  }
`;

export const Testimonials = styled.div`

`;

export const Wrapper = styled.div`
  margin: 5px auto;
  color: ${p => p.theme.colors.grey};
  padding: 30px 40px;
  background: ${p => p.theme.colors.white};
  font-style: italic;
  width: 920px;
  border-radius: 10px;
  position: relative;

  .arrow-mobile {
    display: none;
  }

  @media all and (max-width: 1080px) {
    width: 80%;
    padding-bottom: 40px;
  }

  @media all and (max-width: 767px) {
    width: 95%;
    
    .arrow-desktop {
      display: none;
    }

    .arrow-mobile {
      display: block;
    }

    .quotes {
      margin: 0 auto 15px;
    }

    .author {
      text-align: center;
    }
  }
`;

export const Quotes = styled.div`
  width: 60px;
  height: 20px;
  margin-bottom: 20px;
  background: url(/static/images/comas.svg) center no-repeat;
  background-size: cover;
`;

export const ArrowLeft = styled.div`
  width: 15px;
  height: 30px;
  background: url(/static/images/arrows.svg) -2px no-repeat;
  background-size: cover;
  position: absolute;
  top: 45%;
  left: -45px;
  cursor: pointer;

  &.arrow-mobile {
    top: auto;
    bottom: -60px;
    left: 35%;
  }
`;

export const ArrowRight = styled.div`
  width: 15px;
  height: 30px;
  background: url(/static/images/arrows.svg) -17px no-repeat;
  background-size: cover;
  position: absolute;
  top: 45%;
  right: -45px;
  cursor: pointer;

  &.arrow-mobile {
    top: auto;
    bottom: -60px;
    left: 65%;
  }
`;

export const Text = styled.div`
  line-height: 24px;
  font-size: 16px;

  @media all and (max-width: 767px) {
    text-align: center;
    line-height: 18px;
  }
`;

export const Author = styled.div`
  font-style: normal;
  text-transform: uppercase;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;

  .plus {
    color: #0d8cef;
  }
`;
