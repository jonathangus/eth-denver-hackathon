import axios from 'axios';
import { ExternalNftData } from 'shared-config';

export const getMetadataFromTokenURI = async (
  uri: string
): Promise<ExternalNftData> => {
  if (uri.includes('data:application/json;base64')) {
    const data = JSON.parse(
      atob(uri.replace('data:application/json;base64,', ''))
    );

    return data;
  } else {
    const url = `/api/get-metadata?uri=${encodeURIComponent(uri)}`;
    console.log(url);
    const { data } = await axios.get(url);
    return data;
  }
};