import { uuid as v4 } from "uuidv4";
import { generate } from "cnpj";

export function idClientePorCNPJ(idCliente: string) {
  console.log(idCliente);
  return v4();
}

export function cnpjPorIdCliente(cnpj: string) {
  console.log(cnpj);
  return generate();
}
