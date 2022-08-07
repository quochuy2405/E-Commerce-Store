import axiosClient from './axiosConfig'

// get  by lazy loading
const getAlls = async (page: string, limit: string, route: string) => {
  try {
    const response = await axiosClient.get('')
    if (response.data) {
      return response.data
    }
    return []
  } catch (error) {
    return []
  }
}

// get  by id
const getById = async (id: string, route: string) => {
  try {
    const response = await axiosClient.get('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// update   by id
const update = async (id: string, data: any, route: string) => {
  try {
    const response = await axiosClient.put('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// update by id
const deleteById = async (id: string, route: string) => {
  try {
    const response = await axiosClient.delete('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// add list
const addMutiple = async (list: Array<any>, route: string) => {
  try {
    const response = await axiosClient.post('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// add a
const add = async (data: any, route: string) => {
  try {
    const response = await axiosClient.post('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

// get revenew
const getRevenue = async (date: string, route: string) => {
  try {
    const response = await axiosClient.post('')
    if (response.data) {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

export { getAlls, getById, update, deleteById, addMutiple, add, getRevenue }
