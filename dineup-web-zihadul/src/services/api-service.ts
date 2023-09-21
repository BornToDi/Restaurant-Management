import { $api } from '../boot/axios';
import { AuthChecker } from '../helpers/authGuard.decorator';

@AuthChecker()
export default class {
  static async post(url: string, payload: any, config?: any) {
    return $api.post(url, payload, config);
  }
  static async patch(url: string, payload: any, config?: any) {
    return $api.patch(url, payload, config);
  }
  static async get(url: string, config?: any) {
    return $api.get(url, config);
  }
  static async put(url: string, payload: any, config?: any) {
    return $api.put(url, payload, config);
  }
  static async delete(url: string, config?: any) {
    return $api.delete(url, config);
  }
}
