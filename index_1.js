const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = crypto.randomBytes(8).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}