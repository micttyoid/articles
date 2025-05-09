# Test data: DBML - Long example

**Syntax**

```dbml
// Users and Authentication
Table users {
  id int [pk, increment]
  username varchar(50) [not null, unique]
  email varchar(255) [not null, unique]
  password_hash varchar(255) [not null]
  first_name varchar(100)
  last_name varchar(100)
  is_active boolean [not null, default: true]
  is_staff boolean [not null, default: false]
  is_superuser boolean [not null, default: false]
  last_login timestamp
  date_joined timestamp [not null]
}

// User profiles
Table user_profiles {
  id int [pk, increment]
  user_id int [not null, unique, ref: > users.id]
  phone varchar(20)
  address text
  city varchar(100)
  state varchar(100)
  country varchar(100)
  postal_code varchar(20)
  avatar_url varchar(255)
  bio text
}

// Product categories
Table categories {
  id int [pk, increment]
  name varchar(100) [not null]
  slug varchar(100) [not null, unique]
  description text
  parent_id int [ref: > categories.id]
  is_active boolean [not null, default: true]
  display_order int [not null, default: 0]
}

// Products
Table products {
  id int [pk, increment]
  name varchar(255) [not null]
  slug varchar(255) [not null, unique]
  description text
  category_id int [not null, ref: > categories.id]
  price decimal(10,2) [not null]
  compare_at_price decimal(10,2)
  cost_price decimal(10,2)
  sku varchar(100) [unique]
  barcode varchar(100)
  is_active boolean [not null, default: true]
  is_featured boolean [not null, default: false]
  is_bestseller boolean [not null, default: false]
  inventory_quantity int [not null, default: 0]
  weight_grams int
  vendor_id int [ref: > vendors.id]
}

// Product variants
Table product_variants {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  name varchar(100) [not null]
  price_adjustment decimal(10,2) [default: 0.00]
  sku varchar(100)
  inventory_quantity int [not null, default: 0]
  is_default boolean [not null, default: false]
}

// Product images
Table product_images {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  image_url varchar(255) [not null]
  alt_text varchar(255)
  display_order int [not null, default: 0]
}

// Vendors/Suppliers
Table vendors {
  id int [pk, increment]
  name varchar(255) [not null]
  contact_person varchar(100)
  email varchar(255)
  phone varchar(20)
  address text
  website varchar(255)
  is_active boolean [not null, default: true]
}

// Customer orders
Table orders {
  id int [pk, increment]
  user_id int [ref: > users.id]
  order_number varchar(20) [not null, unique]
  status varchar(20) [not null]
  subtotal decimal(10,2) [not null]
  tax_amount decimal(10,2) [not null]
  shipping_amount decimal(10,2) [not null]
  discount_amount decimal(10,2) [not null, default: 0.00]
  total_amount decimal(10,2) [not null]
  payment_method varchar(50)
  payment_status varchar(20) [not null]
  shipping_address text [not null]
  billing_address text [not null]
  customer_note text
}

// Order items
Table order_items {
  id int [pk, increment]
  order_id int [not null, ref: > orders.id]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  quantity int [not null]
  unit_price decimal(10,2) [not null]
  total_price decimal(10,2) [not null]
}

// Customer reviews
Table reviews {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  user_id int [not null, ref: > users.id]
  rating int [not null]
  title varchar(255)
  comment text
  is_approved boolean [not null, default: false]
}

// Shopping carts
Table carts {
  id int [pk, increment]
  user_id int [ref: > users.id]
  session_id varchar(100)
}

// Cart items
Table cart_items {
  id int [pk, increment]
  cart_id int [not null, ref: > carts.id]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  quantity int [not null]
}

// Promotions and discounts
Table promotions {
  id int [pk, increment]
  name varchar(255) [not null]
  description text
  discount_type varchar(20) [not null]
  discount_value decimal(10,2) [not null]
  min_order_amount decimal(10,2)
  is_active boolean [not null, default: true]
  start_date timestamp [not null]
  end_date timestamp [not null]
  code varchar(50) [unique]
  max_uses int
  current_uses int [not null, default: 0]
}

// Wishlists
Table wishlists {
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  name varchar(100) [not null]
  is_public boolean [not null, default: false]
}

// Wishlist items
Table wishlist_items {
  id int [pk, increment]
  wishlist_id int [not null, ref: > wishlists.id]
  product_id int [not null, ref: > products.id]
}

// Shipping methods
Table shipping_methods {
  id int [pk, increment]
  name varchar(100) [not null]
  description text
  price decimal(10,2) [not null]
  min_days int [not null]
  max_days int [not null]
  is_active boolean [not null, default: true]
}

// Order shipments
Table shipments {
  id int [pk, increment]
  order_id int [not null, ref: > orders.id]
  shipping_method_id int [not null, ref: > shipping_methods.id]
  tracking_number varchar(100)
  carrier varchar(100)
  status varchar(50) [not null]
}

// Index definitions
Table users {
  indexes {
    email [unique]
  }
}

Table products {
  indexes {
    sku [unique]
    category_id [name: 'idx_product_category']
  }
}

Table orders {
  indexes {
    user_id [name: 'idx_order_user']
  }
}

Table order_items {
  indexes {
    order_id [name: 'idx_orderitem_order']
  }
}

Table reviews {
  indexes {
    product_id [name: 'idx_review_product']
  }
}

Table cart_items {
  indexes {
    (cart_id, product_id, variant_id) [unique, name: 'idx_cartitem_unique']
  }
}
```

**Render**

```[dbml]
// Users and Authentication
Table users {
  id int [pk, increment]
  username varchar(50) [not null, unique]
  email varchar(255) [not null, unique]
  password_hash varchar(255) [not null]
  first_name varchar(100)
  last_name varchar(100)
  is_active boolean [not null, default: true]
  is_staff boolean [not null, default: false]
  is_superuser boolean [not null, default: false]
  last_login timestamp
  date_joined timestamp [not null]
}

// User profiles
Table user_profiles {
  id int [pk, increment]
  user_id int [not null, unique, ref: > users.id]
  phone varchar(20)
  address text
  city varchar(100)
  state varchar(100)
  country varchar(100)
  postal_code varchar(20)
  avatar_url varchar(255)
  bio text
}

// Product categories
Table categories {
  id int [pk, increment]
  name varchar(100) [not null]
  slug varchar(100) [not null, unique]
  description text
  parent_id int [ref: > categories.id]
  is_active boolean [not null, default: true]
  display_order int [not null, default: 0]
}

// Products
Table products {
  id int [pk, increment]
  name varchar(255) [not null]
  slug varchar(255) [not null, unique]
  description text
  category_id int [not null, ref: > categories.id]
  price decimal(10,2) [not null]
  compare_at_price decimal(10,2)
  cost_price decimal(10,2)
  sku varchar(100) [unique]
  barcode varchar(100)
  is_active boolean [not null, default: true]
  is_featured boolean [not null, default: false]
  is_bestseller boolean [not null, default: false]
  inventory_quantity int [not null, default: 0]
  weight_grams int
  vendor_id int [ref: > vendors.id]
}

// Product variants
Table product_variants {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  name varchar(100) [not null]
  price_adjustment decimal(10,2) [default: 0.00]
  sku varchar(100)
  inventory_quantity int [not null, default: 0]
  is_default boolean [not null, default: false]
}

// Product images
Table product_images {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  image_url varchar(255) [not null]
  alt_text varchar(255)
  display_order int [not null, default: 0]
}

// Vendors/Suppliers
Table vendors {
  id int [pk, increment]
  name varchar(255) [not null]
  contact_person varchar(100)
  email varchar(255)
  phone varchar(20)
  address text
  website varchar(255)
  is_active boolean [not null, default: true]
}

// Customer orders
Table orders {
  id int [pk, increment]
  user_id int [ref: > users.id]
  order_number varchar(20) [not null, unique]
  status varchar(20) [not null]
  subtotal decimal(10,2) [not null]
  tax_amount decimal(10,2) [not null]
  shipping_amount decimal(10,2) [not null]
  discount_amount decimal(10,2) [not null, default: 0.00]
  total_amount decimal(10,2) [not null]
  payment_method varchar(50)
  payment_status varchar(20) [not null]
  shipping_address text [not null]
  billing_address text [not null]
  customer_note text
}

// Order items
Table order_items {
  id int [pk, increment]
  order_id int [not null, ref: > orders.id]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  quantity int [not null]
  unit_price decimal(10,2) [not null]
  total_price decimal(10,2) [not null]
}

// Customer reviews
Table reviews {
  id int [pk, increment]
  product_id int [not null, ref: > products.id]
  user_id int [not null, ref: > users.id]
  rating int [not null]
  title varchar(255)
  comment text
  is_approved boolean [not null, default: false]
}

// Shopping carts
Table carts {
  id int [pk, increment]
  user_id int [ref: > users.id]
  session_id varchar(100)
}

// Cart items
Table cart_items {
  id int [pk, increment]
  cart_id int [not null, ref: > carts.id]
  product_id int [not null, ref: > products.id]
  variant_id int [ref: > product_variants.id]
  quantity int [not null]
}

// Promotions and discounts
Table promotions {
  id int [pk, increment]
  name varchar(255) [not null]
  description text
  discount_type varchar(20) [not null]
  discount_value decimal(10,2) [not null]
  min_order_amount decimal(10,2)
  is_active boolean [not null, default: true]
  start_date timestamp [not null]
  end_date timestamp [not null]
  code varchar(50) [unique]
  max_uses int
  current_uses int [not null, default: 0]
}

// Wishlists
Table wishlists {
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  name varchar(100) [not null]
  is_public boolean [not null, default: false]
}

// Wishlist items
Table wishlist_items {
  id int [pk, increment]
  wishlist_id int [not null, ref: > wishlists.id]
  product_id int [not null, ref: > products.id]
}

// Shipping methods
Table shipping_methods {
  id int [pk, increment]
  name varchar(100) [not null]
  description text
  price decimal(10,2) [not null]
  min_days int [not null]
  max_days int [not null]
  is_active boolean [not null, default: true]
}

// Order shipments
Table shipments {
  id int [pk, increment]
  order_id int [not null, ref: > orders.id]
  shipping_method_id int [not null, ref: > shipping_methods.id]
  tracking_number varchar(100)
  carrier varchar(100)
  status varchar(50) [not null]
}

// Index definitions
Table users {
  indexes {
    email [unique]
  }
}

Table products {
  indexes {
    sku [unique]
    category_id [name: 'idx_product_category']
  }
}

Table orders {
  indexes {
    user_id [name: 'idx_order_user']
  }
}

Table order_items {
  indexes {
    order_id [name: 'idx_orderitem_order']
  }
}

Table reviews {
  indexes {
    product_id [name: 'idx_review_product']
  }
}

Table cart_items {
  indexes {
    (cart_id, product_id, variant_id) [unique, name: 'idx_cartitem_unique']
  }
}
```

## Source

[DB Diagram](https://dbdiagram.io)