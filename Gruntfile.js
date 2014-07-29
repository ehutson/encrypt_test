module.exports = function(grunt) {

  grunt.initConfig({

    openssl: {
      options: { 
        cipher: 'cast5-cbc',
        salt: '',
        prefix: '',
        affix: '.cast5-cbc'
      },
      myConfigs: ['./configs/*.json*']
    }
  });

  grunt.loadNpmTasks('grunt-openssl');

  grunt.registerTask('default', ['openssl']);
};

