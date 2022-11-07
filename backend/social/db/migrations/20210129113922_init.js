exports.up = function (knex) {
  return knex.schema
    .createTable("tenant_profile", (table) => {
      table.increments();
      table.integer("tenant_id").notNullable();
      table.string("tenant_name").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("state").notNullable();
      table.string("country").notNullable();
      table.string("zip_code").notNullable();
      table.string("phone").notNullable();
      table.string("web_url").notNullable();
    })
    .createTable("user_Profile", (table) => {
      table.increments();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("department").notNullable();
      table.string("designation").notNullable();
      table.integer("designation").notNullable();
      table.integer("tenant_id").references("id").inTable("tenant_profil");
      table.string("image_url").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table.string("bio").notNullable();
      table.integer("employee_id").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tenant_profile")
    .dropTableIfExists("user_Profile");
};
// exports.up = function (knex) {
//   return knex.schema
//     .createTable("channel", (table) => {
//       table.increments();
//       table.string("name").notNullable();
//       table.timestamps(true, true);
//     })
//     .createTable("user", (table) => {
//       table.increments();
//       table.string("name").notNullable();
//       table.string("email").notNullable().unique();
//       table.integer("channelId").references("id").inTable("channel");
//       table.timestamps(true, true);
//     })
//     .createTable("video", (table) => {
//       table.increments();
//       table.string("title").notNullable(),
//         table
//           .integer("channelId")
//           .notNullable()
//           .references("id")
//           .inTable("channel");
//       table.timestamps(true, true);
//     });
// };

// exports.down = function (knex) {
//   return knex.schema
//     .dropTableIfExists("video")
//     .dropTableIfExists("user")
//     .dropTableIfExists("channel");
// };
