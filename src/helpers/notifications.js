import Notiflix from 'notiflix';

export const errorNotify = text => {
  Notiflix.Notify.failure(`${text}`, {
    timeout: 4000,
  });
};

export const loading = (stop = false) => {
  stop
    ? Notiflix.Loading.remove()
    : Notiflix.Loading.circle({
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      });
};
