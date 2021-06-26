import axios from "axios";

export default class SystemEmployeeConfirmToJobAdvertisementService {
  localhost = "http://localhost:8080";
  deployhost = "https://hrmsdemobackend.herokuapp.com";
  currenthost = this.deployhost;

  getAll() {
    return axios.get(
      this.currenthost + "/api/systememployeeconfirmstojobadvertisement/getall"
    );
  }

  get(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstojobadvertisement/get?id=" +
        id
    );
  }

  getAllByJobAdvertisementId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstojobadvertisement/getallbyemployerid?id=" +
        id
    );
  }

  getLatestConfirmByJobAdvertisementId(id) {
    return axios.get(
      this.currenthost +
        "/api/systememployeeconfirmstojobadvertisement/getfirstbyjobadvertisementidorderbydateofconfirmdesc?id=" +
        id
    );
  }

  add(systemEmployeeConfirmToJobAdvertisement) {
    return axios.post(
      this.currenthost + "/api/systememployeeconfirmstojobadvertisement/add",
      systemEmployeeConfirmToJobAdvertisement
    );
  }

  delete(id) {
    return axios.delete(
      this.currenthost +
        "/api/systememployeeconfirmstojobadvertisement/delete?id=" +
        id
    );
  }

  update(systemEmployeeConfirmToJobAdvertisement) {
    return axios.put(
      this.currenthost + "/api/systememployeeconfirmstojobadvertisement/update",
      systemEmployeeConfirmToJobAdvertisement
    );
  }

  confirmEmployer(jobAdvertisement) {
    return axios.put(
      this.currenthost +
        "/api/systememployeeconfirmstojobadvertisement/confirmjobadvertisement",
      jobAdvertisement
    );
  }
}
