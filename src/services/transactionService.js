import  http  from '../http-common.js';

const getAllByDate = (yearMonth) => {
  return http.get(`/transaction/${yearMonth}`);
};

const get = (id) => {
  return http.get(`/transaction/${id}`);
};

const create = (data) => {
  return http.post('/transaction', data);
};

const update = (id, data) => {
  return http.put(`/transaction/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/transaction/${id}`);
};

const removeAll = () => {
  return http.delete(`/transaction`);
};

const findByDescription = (description) => {
  return http.get(`/transaction?description=${description}`);
};

export default {
  getAllByDate,
  get,
  create,
  update,
  remove,
  removeAll,
  findByDescription,
};
