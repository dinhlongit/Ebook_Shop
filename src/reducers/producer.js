import * as producerConstants from './../constants/producer';
import { toastError,toastSuccess } from '../helpers/toastHelper';

const initialState = {
    listProducer:[{}],
    producerEditing: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case producerConstants.FETCH_PRODUCER: {
        return {
          ...state,
        };
      }
      case producerConstants.FETCH_PRODUCER_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listProducer: data,
        };
      }
      case producerConstants.FETCH_PRODUCER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
          listProducer: [],
        };
      }

      //delete
      case producerConstants.DELETE_PRODUCER: {
        return {
          ...state,
        };
      }
      case producerConstants.DELETE_PRODUCER_SUCCESS: {
        const { data: userId } = action.payload; 
        toastSuccess('Xóa producer thành công');
        return {
          ...state,
          listProducer: state.listProducer.filter(item => item.id !== userId),
        };
      }
      case producerConstants.DELETE_PRODUCER_FAILED: {
        const { error } = action.payload;
        toastError(error);
        return {
          ...state,
        };
      }

        //====

        case producerConstants.ADD_PRODUCER: {
          return {
            ...state,
          };
        }
        case producerConstants.ADD_PRODUCER_SUCCESS: {
          const { data } = action.payload;
          console.log(data);
          toastSuccess('Thêm mới producer thành công');
          return {
            ...state,
            listProducer: state.listProducer.concat([data]),
          };
          //return Object.assign({},state,{ listProducer : data})
        }
        case producerConstants.ADD_PRODUCER_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }
        case producerConstants.SET_PRODUCER_EDITING: {
          const { user } = action.payload;
          return {
            ...state,
            producerEditing: user,
          };
        }
        case producerConstants.UPDATE_PRODUCER: {
          return {
            ...state,
          };
        }
        case producerConstants.UPDATE_PRODUCER_SUCCESS: {
          const { data } = action.payload;
          const { listProducer } = state;
          const index = listProducer.findIndex(item => item.id === data.id);
          if (index !== -1) {
            const newList = [
              ...listProducer.slice(0, index),
              data,
              ...listProducer.slice(index + 1),
            ];
            toastSuccess('Cập nhật producer thành công');
            return {
              ...state,
              listProducer: newList,
            };
          }
          return {
            ...state,
          };
        }
        case producerConstants.UPDATE_PRODUCER_FAILED: {
          const { error } = action.payload;
          toastError(error);
          return {
            ...state,
          };
        }

      default:
        return state;
    }
  };
  
  export default reducer;