import { deleteAsync } from 'del';
import settings from '../../settings.js';

const deleteDest = async () => {
  return await deleteAsync(`${settings.dest}`);
};

export default deleteDest;
