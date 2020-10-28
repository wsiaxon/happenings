const { config } = require('dotenv');
const crypto = require('crypto');
const cryptoRandomString = require('crypto-random-string');
const jwt = require('jsonwebtoken');
const AppConsts = require('../appconsts');

config();

/**
 * @deprecated
 * @function hashPassword
 * @description hash password using Argon2i
 *
 * @param {String} password
 */
async function hashPassword(password) {
  const salt = crypto.randomBytes(+process.env.SALT_ROUNDS);
  const hashed = await argon2i.hash(password, salt);
  return hashed;
}

/**
 * @deprecated
 * @function verifyPassword
 * @description verify hashed password using Argon2i
 *
 * @param {String} encodedPassword
 * @param {String} password
 */
function verifyPassword(encodedPassword, password) {
  return argon2i.verify(encodedPassword, password);
}

function generateToken({ id, roles }, duration = AppConsts.JwtDuration) {
  return jwt.sign({ id, role: roles.map(r => r.name) }, process.env.JWT_KEY, { expiresIn: duration });
}

function urlSafeRandomString({ length }) {
  const string = cryptoRandomString({ length, type: 'url-safe' });
  return string.replace(/\./g, '');
}

function emailVerificationLink(token) {
  const link = `${process.env.FRONTEND_APP_URL}/auth/verify_email/${token}`;
  return link;
}

function passwordResetLink(token) {
  const link = `${process.env.FRONTEND_APP_URL}/auth/reset_password/${token}`;
  return link;
}

module.exports = {
  emailVerificationLink,
  passwordResetLink,
  generateToken,
  hashPassword,
  verifyPassword,
  urlSafeRandomString,
};
