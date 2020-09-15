const Models = require('../models');

const { Category } = Models;

module.exports = {
  /**
   * @function slugify
   * @description function to generate human-readable, unique identifier, used
   * to identify a resource instead of a less human-readable identifier like an id
   * -> https://github.com/meetKazuki/vali-ah-backend/blob/develop/src/helpers/slugify.js
   *
   * @param{String} input - string to slugify
   *
   * @returns {String}
   */
  slugify: (input) => {
    const normalCharacters = 'aaaaeeeeiiiioooouuuunc------';
    const specialCharacters = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    let stringValue = input.trim().toLowerCase();

    [...specialCharacters].forEach((character, index) => {
      stringValue = stringValue.replace(
        new RegExp(specialCharacters.charAt(index), 'g'),
        normalCharacters.charAt(index),
      );
    });
    stringValue = stringValue.replace(/[^a-z0-9 -]/g, '').replace(/[\s-]+/g, '-');
    stringValue = (stringValue.endsWith('-'))
      ? stringValue.substring(0, stringValue.length - 1)
      : stringValue;

    return (stringValue.startsWith('-'))
      ? stringValue.substring(1, stringValue.length)
      : stringValue;
  },

  /**
   * @function getTagName
   * @description convert tag ids to tag names
   *
   * @param {Array} tags tag to validate
   *
   * @returns {Array} returns an array of tag names
   */
  getTagName: async (tags) => {
    const response = await Category.checkTagsExistence(tags);
    const tagNames = response.map((eachTag) => eachTag.category);
    return tagNames;
  },
};
