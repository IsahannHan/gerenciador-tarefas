export class WebStorage {
  static saveEntity(webStorageKey: string, entity: any) {
    localStorage.setItem(webStorageKey, JSON.stringify(entity));
  }
  
  static getEntity(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
