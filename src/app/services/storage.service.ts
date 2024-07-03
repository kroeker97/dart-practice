import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  async set(key: string, value: any): Promise<void> {
    await Preferences.set({ key, value: JSON.stringify(value) });
  }

  async get(key: string): Promise<any> {
    const { value } = await Preferences.get({ key });
    return value ? JSON.parse(value) : null;
  }
}