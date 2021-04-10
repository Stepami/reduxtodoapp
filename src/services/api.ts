import axios, { AxiosRequestConfig } from "axios";
import { deserialize, deserializeArray } from "class-transformer";
import { IConstructor } from "../interfaces";

export function makeObjApiRequest<T extends object>(constructor: IConstructor<T>, config: AxiosRequestConfig) {
    return axios.request<T>({
        ...config,
        transformResponse: (data: string) => deserialize(constructor, data)
    })
}

export function makeArrApiRequest<T extends object>(constructor: IConstructor<T>, config: AxiosRequestConfig) {
    return axios.request<T[]>({
        ...config,
        transformResponse: (data: string) => deserializeArray(constructor, data)
    })
}