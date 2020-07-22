import axios from 'axios';
import { urlCategories } from '../../config'



/**
 * Get all categories
 * @return object
 */
export const indexCategories =  () => {
    let result =  axios.get(urlCategories)
    return result
}