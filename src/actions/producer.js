import * as producerConstants from "../constants/producer";

export const fetchListProducer = () => {
  return {
    type: producerConstants.FETCH_PRODUCER,
  };
};

export const fetchListProducerSuccess = (data) => {
  return {
    type: producerConstants.FETCH_PRODUCER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListProducerFailed = (error) => {
  return {
    type: producerConstants.FETCH_PRODUCER_FAILED,
    payload: {
      error,
    },
  };
};

//DELETE
export const deleteProducer = (id) => {
  return {
    type: producerConstants.DELETE_PRODUCER,
    payload: {
      id,
    },
  };
};

export const deleteProducerSuccess = (data) => {
  return {
    type: producerConstants.DELETE_PRODUCER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProducerFailed = (error) => {
  return {
    type: producerConstants.DELETE_PRODUCER_FAILED,
    payload: {
      error,
    },
  };
};

///----

export const addProducer = (
  name,
) => {
  return {
    type: producerConstants.ADD_PRODUCER,
    payload: {
      name,
    },
  };
};

export const addProducerSuccess = (data) => {
  return {
    type: producerConstants.ADD_PRODUCER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addProducerFailed = (error) => {
  return {
    type: producerConstants.ADD_PRODUCER_FAILED,
    payload: {
      error,
    },
  };
};

export const setProducerEditing = (user) => {
  return {
    type: producerConstants.SET_PRODUCER_EDITING,
    payload: {
      user,
    },
  };
};

export const updateProducer = (
  name,
) => {
  return {
    type: producerConstants.UPDATE_PRODUCER,
    payload: {
      name,
    },
  };
};

export const updateProducerSuccess = (data) => {
  return {
    type: producerConstants.UPDATE_PRODUCER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateProducerFailed = (error) => {
  return {
    type: producerConstants.UPDATE_PRODUCER_FAILED,
    payload: {
      error,
    },
  };
};