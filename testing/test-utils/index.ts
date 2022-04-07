import { AxiosResponse } from 'axios'

/**
 * Create an API Response Object.
 *
 * Usually we do not need to mock all properties of a response, this helper function
 * will fill in the fields of an AxiosResponse for you.
 * @param response An {@link AxiosResponse} with at least the `data` property filled out, or some
 * value T that should be used for the `data` property.
 * @returns an {@link AxiosResponse}<T>
 */
export const getResponseOf = <T>(
  response: (Pick<AxiosResponse<T>, 'data'> & Partial<AxiosResponse<T>>) | T
): AxiosResponse<T> => {
  const baseResponse: AxiosResponse<T> = {
    data: response as T,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  }

  return { ...baseResponse, ...response }
}
