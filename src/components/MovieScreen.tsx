import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getMovieById } from '../helpers/getMovieById';
import { removeFavorites, setFavorites } from '../reducers/movieReducer';
import { DivFavs, LikeSolid, DislikeSolid } from '../styles/MovieScreenStyles';
import {
   DivInfo,
   MovieInfo,
   Rate,
   DislikeRegular,
   LikeRegular,
} from '../styles/MovieScreenStyles';
import {
   MovieImage,
   DivImage,
   DivTexts,
   MovieTitle,
   MovieOverview,
} from '../styles/MovieScreenStyles';

export const MovieScreen = () => {
   const history = useHistory();
   const dispatch = useAppDispatch();
   const [modalIsOpen, setModalIsOpen] = useState(true);
   const { movieId } = useParams<{ movieId: string }>();
   const { movies } = useAppSelector((state) => state.movie);
   const { moviesBySearch, favorites } = useAppSelector((state) => state.movie);

   const movie =
      moviesBySearch.length > 0
         ? getMovieById(movieId, moviesBySearch)
         : getMovieById(movieId, movies);

   const closeModal = () => {
      setModalIsOpen(false);
      history.goBack();
   };

   let isFavorite: boolean = movie ? favorites.includes(movie?.id) : false;

   const handleLike = () => {
      if (movie) {
         isFavorite
            ? dispatch(removeFavorites(movie?.id))
            : dispatch(setFavorites(movie.id));
      }
   };
   const handleDislike = () => {
      if (movie) {
         isFavorite
            ? dispatch(removeFavorites(movie?.id))
            : dispatch(setFavorites(movie.id));
      }
   };

   const customStyles = {
      overlay: { backgroundColor: 'rgba(0,0,0,.6)' },
      content: {
         backgroundColor: '#1d1e1f',
         width: '700px',
         alignItems: 'center',
         margin: 'auto',
         border: 'none',
         borderRadius: '10px',
         color: 'white',
         padding: '0px',
      },
   };
   Modal.setAppElement('#root');
   return (
      <div>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
         >
            <DivImage>
               <MovieImage src={movie?.url_back} />
               <MovieInfo>
                  <DivTexts>
                     <DivInfo>
                        <MovieTitle>{movie?.title}</MovieTitle>
                        <DivFavs>
                           {isFavorite ? (
                              <LikeSolid size='28' onClick={handleLike} />
                           ) : (
                              <LikeRegular size='28' onClick={handleLike} />
                           )}
                           {isFavorite ? (
                              <DislikeRegular
                                 size='28'
                                 onClick={handleDislike}
                              />
                           ) : (
                              <DislikeSolid size='28' onClick={handleDislike} />
                           )}

                           <Rate>Rate: {movie?.vote_average}</Rate>
                        </DivFavs>
                     </DivInfo>
                     <MovieOverview>{movie?.overview}</MovieOverview>
                  </DivTexts>
               </MovieInfo>
            </DivImage>
         </Modal>
      </div>
   );
};
