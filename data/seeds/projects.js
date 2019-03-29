
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { name: "Try to Take Over the World", description: "The same thing we do every night, Pinky. Are you thinking what I'm thinking? Well, yes, Brain, but...Space Jelly? Which of the Spice Girls would even agree to that?"},
        { name: "Convince Barack Obama to Let Me Borrow His Dog", description: "When I ride the Obamas' dog into battle, I will become the most powerful warlord in all the land."},
        { name: "Perfect My Chocolate Chip Cookie Recipe", description: "My nana has been getting real fresh on Instagram lately, always quick with the sick burn, embarassing me in front of all my friends. It's time to teach her a lesson and destroy her hopes and dreams by winning the three-hundred-seventy-ninth annual Alabama State Fair Goodtimes Cookie Competish."}
      ]);
    });
};
