import React from 'react';
import { Wrapper } from 'styles/variables';
import logo from 'images/tmdb.png';
import * as S from './AboutContent.style';

const AboutContent = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Logo src={logo} alt="" />
          <S.Intro>
          Hãy Liên hệ với chúng tôi!
          Nếu bạn có bất kỳ câu hỏi nào,
          xin đừng ngần ngại gửi cho chúng tôi một tin nhắn. Chúng tôi trả lời trong vòng !
          </S.Intro>
          <S.Intro>
            <p>Email : hoangminh12297@gmail.com</p>
            <p>Phone : 02345534553 </p>
          </S.Intro>
          <S.ViewCode href="https://github.com/baeharam/Movie" target="_blank">
            <S.Github />
            https://github.com/hoangminh122
          </S.ViewCode>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default AboutContent;
