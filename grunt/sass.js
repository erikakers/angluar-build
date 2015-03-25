module.exports = {
  dev: {
    files: [{
        expand: true,
        cwd: '<%= paths.scss %>',
        src: ['*.scss'],
        dest: '<%= paths.dist %>/styles/',
        ext: '.css'
    }]
}
};
