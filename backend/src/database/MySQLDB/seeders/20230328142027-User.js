/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'kassio',
        email: 'kassio@gmail.com',
        password: 123456,
      },
      {
        name: 'leo',
        email: 'leo@gmail.com',
        password: 1234567,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
