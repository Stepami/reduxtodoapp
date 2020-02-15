import * as creators from './creators';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type TodosActionTypes = ReturnType<InferValueTypes<typeof creators>>;

export default TodosActionTypes;