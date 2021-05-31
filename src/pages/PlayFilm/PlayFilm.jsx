import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { introActions } from 'store/modules/intro';
import Loader from 'components/Loader/Loader';
import { primaryColor, Layout } from 'styles/variables';
import useComponentWillMount from 'hooks/useComponentWillMount';
import * as S from './PlayFilm.style';
import HeaderMenu from 'components/Header/HeaderMenu';
import { AroundType, AroundCardList } from 'components/Around/index';
import VideoShow from 'components/PlayFilm/VideoShow';
import PaginationFilm from 'components/PlayFilm/PaginationFilm';
import InforFilm from 'components/PlayFilm/InforFilm';


const PlayFilm = () => {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];
  const dispatch = useDispatch();

  useComponentWillMount(() => {
    dispatch(introActions.request());
  });

  return !isLoading ? (
    <Layout>
     <Header color={primaryColor} bgColor="white" />
     <main>
        <HeaderMenu />
        {/* <AroundType /> */}
        <VideoShow />
        <PaginationFilm/>
        <InforFilm />
        <AroundCardList />
      </main>
      <Footer color={primaryColor} />
    </Layout>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor} />
    </S.LoaderContainer>
  );
};

export default PlayFilm;
