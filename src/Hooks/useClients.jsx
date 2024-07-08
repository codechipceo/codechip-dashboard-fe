import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClientsFn, selectClientData } from "../store/clientSlice";

export const useClients = () => {
  const dispatch = useDispatch();
    const data = useSelector(selectClientData);
    
  useEffect(() => {
    dispatch(getAllClientsFn());
  }, [dispatch]);
//   const getClientByIdFn = (id) => {
//     dispatch(getClientById({ clientId: id }));
//   };
  return {
    data,
  };
};
