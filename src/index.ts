import { v4 as uuidv4 } from 'uuid';

export const idClientePorCNPJ = (idCliente: string): string => uuidv4();
