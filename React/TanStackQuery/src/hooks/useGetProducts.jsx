import {axiosInst} from "../config/api";

export const useGetProducts = () => {
  const getProductsData = async () => {
    const response = await axiosInst.get("/products");
    return response.data;
  };

  return {getProductsData};
};
