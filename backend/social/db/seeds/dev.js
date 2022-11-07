exports.seed = async function (knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex("tenant_profile").insert([
    {
      id: 1,
      tenant_id: "101",
      tenant_name: "Ahmad",
      address: "House No 47 Nesheman Iqbal",
      city: "Lahore",
      state: "Punjab",
      country: "Pakistan",
      zip_code: "36000",
      phone: "36000",
      web_url: "google.com",
    },
  ]);

  await knex("user").insert([
    {
      id: 1,
      first_name: "saif",
      last_name: "Rehman",
      department: "Account",
      designation: "Head",
      tenant_id: "101",
      image_url: "google.com",
      city: "Lahore",
      bio: "Student",
      employee_id: "101",
    },
  ]);
};
