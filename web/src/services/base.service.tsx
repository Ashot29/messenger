export class BaseService {
  prefix: string;
  url: string;
  checkEmail?: any;
  getAllUsersExceptOwner?: (currentUserId: string) => Promise<any>;

  constructor(prefix: string, url: string) {
    this.url = url;
    this.prefix = prefix;
  }

  get() {
    return fetch(`${this.url}/${this.prefix}`).then((resp) => resp.json());
  }

  getById(id: string | number) {
    return fetch(`${this.url}/${this.prefix}/${id}`).then((resp) =>
      resp.json()
    );
  }

  delete(id: string | number) {
    return fetch(`${this.url}/${this.prefix}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
  }

  update(id: string | number, data: any) {
    data.updated_at = Date.now();
    return fetch(`${this.url}/${this.prefix}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  post(data: any) {
    data.created_at = Date.now();
    return fetch(`${this.url}/${this.prefix}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }
}