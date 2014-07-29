module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      encrypt: {
        cmd: function(password) {
          return 'openssl cast5-cbc -e -in "./configs/database.json" -out "./configs/database.json.cast5" -k ' + password;
        }
      },
      decrypt: {
        cmd: function(password) {
          return 'openssl cast5-cbc -d -in "./configs/database.json.cast5" -out "./configs/database.json" -k ' + password;
        }
      },
      echo_name: {
        cmd: function(firstName, lastName) {
          var formattedName = [
            lastName.toUpperCase(),
            firstName.toUpperCase()
          ].join(', ');

          return 'echo ' + formattedName;
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('encrypt', ['exec:encrypt']);
  grunt.registerTask('decrypt', ['exec:decrypt']);


};

