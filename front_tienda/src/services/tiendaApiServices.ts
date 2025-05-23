const baseUrl = import.meta.env.VITE_URL_API_PRINCIPAL_DEV

async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  return response.json()
}

export default {
  async getjuguetes() {
    console.log('URL de la API:', baseUrl)

    const response = await fetch(`${baseUrl}/juguetes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async getjugueteById(id: any) {
    const response = await fetch(`${baseUrl}/juguete/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async createjuguete(data: any) {
    const response = await fetch(`${baseUrl}/juguete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async updatejuguete(id: any, data: any) {
    const response = await fetch(`${baseUrl}/juguete/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async deletejuguete(id: any) {
    const response = await fetch(`${baseUrl}/juguete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },
}
