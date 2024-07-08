import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectFn, selectProjectData } from "../store/projectSlice";

export const useProjects = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProjectData);

  useEffect(() => {
    dispatch(getAllProjectFn());
  }, [dispatch]);
  //   const getClientByIdFn = (id) => {
  //     dispatch(getClientById({ clientId: id }));
  //   };
  return {
    data,
  };
};
