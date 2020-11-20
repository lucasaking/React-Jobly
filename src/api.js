import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of companies */
  static async getCompanyList(searchFilter) {
    let res = await this.request(`companies`, searchFilter);
    return res.companies;
  }

  /** Get list of jobs */
  static async getJobList(searchFilter) {
    let res = await this.request(`jobs`, searchFilter);
    return res.jobs;
  }

  /** Apply to job */
  static async appliedJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`,{}, "post");

  }

  /** Create new user */
  static async createUser(newUser) {
    let res = await this.request(`auth/register`, newUser, "post");
    return res.token;
  }


  /** Login user */
  static async loginUser(user) {
    let res = await this.request(`auth/token`, user, "post");
    return res.token;
  }


  /** Update user */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
  

  /** Update user */
  static async getUserDetails(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;