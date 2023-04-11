export type Item = {
  item_id: number;
  sku: string;
  type: string;
  name: string;
  unit_type: string;
  unit_items: UnitItem[];
  description?: string;
  image_url: string;
  promotions?: any;
  periods?: any;
  attributes?: any;
  groups?: any;
};

export type UnitItem = {
  item_id: 18207;
  sku: string;
  type: string;
  price: Price;
  virtual_prices?: any;
  can_be_bought: boolean;
  promotions?: any;
  limits?: any;
  periods?: any;
  is_free: boolean;
  drm_name: string;
  drm_sku: string;
  has_keys: boolean;
  is_pre_order: boolean;
  release_date?: string;
};

export type Price = {
  amount: number;
  amount_without_discount: number;
  currency: string;
};
