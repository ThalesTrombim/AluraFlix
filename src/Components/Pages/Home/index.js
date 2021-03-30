/* eslint-disable linebreak-style */
import React from 'react';
import Carousel from '../../Carousel';
import BannerMain from '../../BannerMain';
import dadosIniciais from '../../../data/dados_iniciais.json';
import PageDefault from '../PageDefault';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <PageDefault>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          category={dadosIniciais.categorias[5]}
        />

      </PageDefault>
    </div>
  );
}

export default Home;
