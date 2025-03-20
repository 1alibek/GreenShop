import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
  const [params, setParams] = useSearchParams();
  const getParam = (path: string) => params.get(path);
  const setParam = (param: object) => {
    setParams({
        ...param
    })
  }
  return{getParam,setParam}
};

export  {UseSearchParams};
