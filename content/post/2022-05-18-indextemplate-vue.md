---
title: IndexTemplate.vue
date: 2022-05-18T05:09:08.891Z
description: doc for index template
---
## `indexTemplate.vue`

component ini digunakan untuk membuat halaman index yang umum dengan beberapa configurasi

### **Props**

| props | type | default | fungsi |
| --- | --- | --- | --- |
| title | String | Title index Page | judul pada atas table |
| tableHeaders | Array | `[ { text: String, align: String (left, right, center), sortable: Boolean, value: String } ]` | headers table, sama dengan datatable vuetify |
| search | Object | {}  | object search dari formatnya key value { name: 'test' } |
| repository | String |     | name repository di file repositorifactory.js |
| titleColor | String | green--text | mengatur warna title, class bawaan vuetify |
| alert | Object | { show: false, color: undefined, message} | menampilkan alert |

### **function**

`refresh()`: refresh table

akses dengan refs

### **Slots**

| name | default | fungsi |
| --- | --- | --- |
| item | table item | menampilkan item list pada table |

### **Events**

`@click:add` button add di click
`@click:refresh` button refresh di click

* * *
