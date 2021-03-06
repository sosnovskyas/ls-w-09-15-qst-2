//var prod = './build/prod';
var dev = './build/dev/';
var src = './src';

module.exports = {
  developer: {
    sequencePre: [
      // need for resolve trouble with empty sequence
      'empty'
    ],
    sequenceClean: [
      'dev-clean'
    ],
    sequenceBuild: [
      'dev-jade',
      //'dev-scss',
      'dev-js-direct',
      'dev-js-vendor',
      'dev-js-custom',
      'dev-compass',
      'dev-fonts',
      'dev-img'
    ],
    sequenceServer: [
      'dev-browsersync'
    ],
    sequenceWatch: [
      'dev-watch-jade',
      'dev-watch-compass',
      'dev-watch-js-custom',
      'dev-watch-img'
    ],
    sequencePost: [
      // need for resolve trouble with empty sequence
      'empty'
    ]
  },
  devClean: {
    dest: dev
  },
  devScss: {
    src: src + '/templates/custom.scss',
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  devCompass: {
    src: src + '/templates/custom.scss',
    sass: 'src/templates',
    image: 'src/images',
    generated_images_path: 'build/dev/i',
    sourcemap: true,
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css'
  },
  devSassSprites: {
    src: src + '/social-dark/*.png',
    exportImg: 'images/_sprite.png',
    exportCss: 'social-dark/_sprite.scss',
    dest: src
  },

  devCssVendor: {
    src: [
        ],
    dest: dev,
    concatFile: 'vendor.css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  devJsDirect: {
    src: [
      'bower_components/respond/dest/respond.min.js',
      'node_modules/modernizr/modernizr.js'
    ],
    dest: dev
  },
  devJsCustom: {
    src: src + '/**/*.{js,coffee}',
    concatFile: 'custom.js',
    dest: dev
  },
  devJsVendor: {
    src: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/bPopup/jquery.bpopup.js',
      './bower_components/jquery-ui/jquery-ui.js',
      './bower_components/select2/dist/js/select2.min.js'
    ],
    concatFile: 'vendor.js',
    dest: dev
  },
  devImage: {
    watch: src + '/images/**/*',
    src: src + '/images/*',
    dest: dev + '/i'
  },
  devJade: {
    watch: src + '/**/*.jade',
    src: src + '/bundles/*.jade',
    dest: dev
  },
  devBrowsersync: {
    dest: dev
  }
};
