/**
 * Shop item definitions for the in-game MarketPlace.
 */

export type ShopCategory = 'objects' | 'consumables' | 'sounds';

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  minLevelRequired: number;
  picture: string;
  model: string;
  sound: string;
  category: ShopCategory;
  /** For consumables: max quantity a player can hold. null = non-consumable. */
  maxQuantity?: number;
}

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'healing_dome_grenade',
    name: 'Granada Domo de Curación',
    description: 'Crea un domo de cura instantánea.',
    price: 50,
    minLevelRequired: 5,
    picture: '/images/items/healing_dome.jpg',
    model: '/models/objects/ScifiGrenade.glb',
    sound: '',
    category: 'consumables',
    maxQuantity: 3,
  },
  {
    id: 'aegis_dome_grenade',
    name: 'Granada Domo Escudo',
    description: 'Crea un domo protector de escudo.',
    price: 55,
    minLevelRequired: 1,
    picture: '/images/items/aegis_dome.jpg',
    model: '/models/objects/ScifiGrenade.glb',
    sound: '',
    category: 'consumables',
    maxQuantity: 3,
  },
];
