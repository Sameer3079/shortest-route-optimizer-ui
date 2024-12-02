import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5174', // Update with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const findShortestPath = async (fromNode: string, toNode: string, graphNodes: any[]) => {
  try {
    const response = await apiClient.post('/ShortestPath/find', {
      fromNode,
      toNode,
      graphNodes,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred';
  }
};
