const { v4: uuidv4 } = require('uuid');

export const idClientePorCNPJ = (idCliente: string): string => uuidv4();
