import React from 'react';
import { Wrapper } from 'styles/variables';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './HomeIntro.style';

const HomeIntro = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            <S.Title>Phim hay trong ngày dành cho bạn</S.Title>
            <S.Desc data-testid="home-tagline">{result.tagline}</S.Desc>
            <S.Name data-testid="home-title">{result.title}</S.Name>
            <S.MoreButton>
              <Link data-testid="more-link" to={`/detail/${result.id}`}>
                Chi tiết
              </Link>
            </S.MoreButton>
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
      <LocationDisplay />
    </>
  );
};

export default HomeIntro;
