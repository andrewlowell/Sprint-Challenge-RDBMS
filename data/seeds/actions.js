
exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        { project_id: 1, notes: "Get Worldstar in on this", description: "Actually tell the Worldstar about all of this."},
        { project_id: 2, description: "Actually find a useful telephone number."},
        { project_id: 2, description: "Actually become a pygmy so I wouldn't crush the battle dog's back."},
        { project_id: 3, description: "Actually bake some cookies."},
        { project_id: 3, description: "Actually purchase some ingredients."},
        { project_id: 3, description: "Actually find some friends to give feedback on the cooooookies."}
      ]);
    });
};
