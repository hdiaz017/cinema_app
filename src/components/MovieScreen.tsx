import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams, useHistory } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { getMovieById } from '../helpers/getMovieById';
import { MovieImage, DivImage } from '../styles/MovieScreenStyles';

export const MovieScreen = () => {
   const history = useHistory();
   const [modalIsOpen, setModalIsOpen] = useState(true);
   const { movieId } = useParams<{ movieId: string }>();
   const { movies } = useAppSelector((state) => state.movie);
   const movie = getMovieById(movieId, movies);
   const closeModal = () => {
      setModalIsOpen(false);
      history.goBack();
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
            </DivImage>
         </Modal>
      </div>
   );
};
