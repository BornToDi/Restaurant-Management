import { defineStore } from 'pinia';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
// import apiService from "../services/api-service"

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userInfo: useLocalStorage('userInfo', null, {
      serializer: StorageSerializers.object,
    }),
    token: useLocalStorage('token', null, {
      serializer: StorageSerializers.string,
    }),
    userRole: useLocalStorage('userRole', null, {
      serializer: StorageSerializers.object,
    }),
    permissions: useLocalStorage('permissions', null, {
      serializer: StorageSerializers.string,
    }),
  }),
  getters: {
    getUserInfo: (state) => state.userInfo,
    getToken: (state) => state.token,
    getUserRoleName: (state) => state.userRole.role_name,
  },
  actions: {
    hasAccess(permission: any): boolean {
      const permissions = this.permissions;
      return permission?.some((perm: string) => permissions.includes(perm));
    },
    canAccess(permission: string): boolean {
      const permissions = this.permissions;
      return permissions.includes(permission);
    },
    logout() {
      this.userInfo = null;
      this.token = null;
      this.userRole = null;
      this.userType = null;
    },
  },
});
