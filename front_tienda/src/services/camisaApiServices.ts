const baseUrl = import.meta.env.MODE === 'development'
  ? import.meta.env.VITE_URL_API_PRINCIPAL_DEV
  : import.meta.env.VITE_URL_API_PRINCIPAL_PROD;

async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  return response.json()
}

export default {
  async getCamisas() {
    console.log('URL de la API:', baseUrl)

    const response = await fetch(`${baseUrl}/camisas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async getCamisaById(id: any) {
    const response = await fetch(`${baseUrl}/camisa/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async createCamisa(data: any) {
    const response = await fetch(`${baseUrl}/camisa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async updateCamisa(id: any, data: any) {
    const response = await fetch(`${baseUrl}/camisa/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async deleteCamisa(id: any) {
    const response = await fetch(`${baseUrl}/camisa/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },
}
