export const REQUEST_ART = 'REQUEST_ART';
const requestArt = () => {
  return {
    type: REQUEST_ART
  };
};

export const ART_SUCCESS = 'ART_SUCCESS';
const artSuccess = data => {
  return {
    type: ART_SUCCESS,
    data
  };
};

export const ART_ERROR = 'ART_ERROR';
const artError = error => {
  return {
    type: ART_ERROR,
    error
  };
};

export const fetchArt = () => dispatch => {
  dispatch(requestArt());
  return fetch('https://api.behance.net/v2/projects?field=drawing&client_id=iDzwMeblcEXY6R5KdKWUTgt3CKfI52tD')
    .then(result => {
      if (result.ok){
        return result.json();
      }
      throw new Error(result);
    })
    .then(result => {
      const data = new Array(4);
      for (let i = 0; i < 4; i++){
        data[i] = {
          name : result.projects[i].name,
          url : result.projects[i].url,
          image : result.projects[i].covers.original,
          artist : result.projects[i].owners[0].first_name + ' ' + result.projects[i].owners[0].last_name
        };
      }
      console.log('dispatching data');
      dispatch(artSuccess(data));
    }).catch(error => dispatch(artError(error)));
};