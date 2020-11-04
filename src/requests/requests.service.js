import { client } from '../util/client.util';
import { TASK_API } from '../config/constants';

export const getRestaurant = async ({id}, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/edit/${id}`)
    return res.data;
}

export const getRestaurants = async (args, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/get/all`)
    return res.data;
}

export const editRestaurant = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/edit`, args)
    return res.data;
}

export const deleteRestaurant = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/delete`, args)
    return res.data;
}


export const getRestaurantItem = async ({ id }, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/item/get/${id}`)
    return res.data;
}

export const getRestaurantItems = async ({ restaurantId }, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/item/all/${restaurantId}`)
    return res.data;
}

export const getRestaurantItemsByCategory = async ({ categoryId }, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/item/by-category/${categoryId}`)
    return res.data;
}

export const editRestaurantItem = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/item/edit`, args)
    return res.data;
}

export const deleteRestaurantItem = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/item/delete`, args)
    return res.data;
}


export const getRestaurantItemCategories = async ( { restaurantId }, context) => {
    const res = await client(context.token)
        .get(`${TASK_API}/restaurant/item/category/all/${restaurantId}`)
    return res.data;
}

export const editRestaurantItemCategory = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/item/category/edit`, args)
    return res.data;
}

export const deleteRestaurantItemCategory = async (args, context) => {
    const res = await client(context.token)
        .post(`${TASK_API}/restaurant/item/category/delete`, args)
    return res.data;
}
