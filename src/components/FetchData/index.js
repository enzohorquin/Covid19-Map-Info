import { useEffect } from 'react';
import { apiCall } from '../../api';
import { parseResponse } from '../../utils';

const DataFetch = ({ content, setData }) => {
    useEffect(() => {
        let hasFinished = false; 
        const apiFetch =  async () => {
          try {
            if (!hasFinished && content !== '') {
              let response = await apiCall(content)
              let datos =  await response.json();
              setData(parseResponse(datos?.data?.covid19Stats));
            }
          }
          catch {
            console.log("Error");
          }
          
        }
        apiFetch();
        return () => { hasFinished = true; }
    }, [content, setData]);
    return null;
};
export default DataFetch;