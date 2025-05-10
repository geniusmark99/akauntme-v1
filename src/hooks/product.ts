import useSWR from 'swr'
import axios from '@/lib/axios'


export const useProducts = () => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)

    const {
        data: products,
        error: productsError,
        mutate: mutateProducts,
    } = useSWR('/api/v1/products', fetcher)

    const {
        data: lowStockProducts,
        error: lowStockError,
        mutate: mutateLowStock,
    } = useSWR('/api/v1/products/low-stock', fetcher)

    const getProduct = async (id: number) => {
        try {
            const response = await axios.get(`/api/v1/products/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const createProduct = async (data: any) => {
        try {
            await axios.post('/api/v1/products', data)
            mutateProducts()
        } catch (error) {
            throw error
        }
    }

    const updateProduct = async (id: number, data: any) => {
        try {
            await axios.put(`/api/v1/products/${id}`, data)
            mutateProducts()
        } catch (error) {
            throw error
        }
    }

    const deleteProduct = async (id: number) => {
        try {
            await axios.delete(`/api/v1/products/${id}`)
            mutateProducts()
        } catch (error) {
            throw error
        }
    }

    const updateStock = async (id: number, data: any) => {
        try {
            await axios.patch(`/api/v1/products/${id}/update-stock`, data)
            mutateProducts()
        } catch (error) {
            throw error
        }
    }

    return {
        products,
        productsError,
        lowStockProducts,
        lowStockError,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        updateStock,
        mutateProducts,
    }
}
